import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  addPost(): Observable<IPost> {
    return this.http.post<IPost>(this.url, {
      title: 'aaa',
      body: 'bbb',
      userId: 1,
      id: 1,
    });
  }
}
