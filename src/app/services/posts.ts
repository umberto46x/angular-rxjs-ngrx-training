import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  rootUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  rootUsersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  httpServ: HttpClient = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.httpServ.get<Post[]>(this.rootUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpServ.get<Post>(this.rootUrl.concat(`/${id}`));
  }
  getPostsByUser(userId: number): Observable<Post> {
    return this.httpServ.get<Post>(
      this.rootUsersUrl.concat(`/${userId}/posts`)
    );
  }
}
