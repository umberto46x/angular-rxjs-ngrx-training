import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  interval,
  Observable,
  Subscription,
  switchMap,
  throttleTime,
} from 'rxjs';
import { Posts } from '../../services/posts';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Movie, MovieResponse } from '../../models/Movie';
import { MoviesService } from '../../services/movies-service';

@Component({
  selector: 'app-rxjs-training',
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rxjs-training.html',
  styleUrl: './rxjs-training.scss',
})
export class RxjsTraining implements OnDestroy, OnInit {
  clickAmount = signal<number>(0);
  clickSubscription?: Subscription;

  seconds = signal<number>(0);
  timerSubscription?: Subscription;

  postsService: Posts = inject(Posts);
  posts$?: Observable<Post[]>;

  movieService: MoviesService = inject(MoviesService);
  searchValue = new FormControl();
  searchResults$?: Observable<MovieResponse>;

  ngOnInit() {
    const buttonRef = document.getElementById('button');

    if (buttonRef) {
      this.clickSubscription = fromEvent(buttonRef, 'click')
        .pipe(throttleTime(1000))
        .subscribe(() => {
          this.clickAmount.update((p) => p + 1);
          console.log('clicked');
        });
    }

    this.timerSubscription = interval(1000).subscribe((t) => {
      this.seconds.update((p) => p + 1);
    });

    this.searchResults$ = this.searchValue.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => {
        if (query && query.trim() !== '') {
          return this.movieService.getMoviesBySearch(query);
        } else {
          return new Observable<MovieResponse>((s) =>
            s.next({ Search: [], Response: '', totalResults: '' })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    if (this.clickSubscription) {
      console.log('unsubscribed');
      this.clickSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      console.log('unsubscribed');
      this.timerSubscription.unsubscribe();
    }
  }

  handleAllPosts() {
    this.posts$ = this.postsService.getPosts();
  }
}
