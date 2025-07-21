import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  searchUrl = 'https://www.omdbapi.com/?apikey=86db6bb5&s=';
  http: HttpClient = inject(HttpClient);

  getMoviesBySearch(query: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.searchUrl + query);
  }
}
