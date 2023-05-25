import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  serverUrl = 'http://localhost:3000';

  blogsSubject = new Subject();

  constructor(private http: HttpClient) {}

  getBlogs = () => {
    return this.http.get(`${this.serverUrl}/blogs`).pipe(tap((x) => x));
  };

  deleteBlog = (id: number | undefined) => {
    return this.http
      .delete(`${this.serverUrl}/blogs/${id}`)
      .pipe(tap((x) => console.log('Successfully delete blog', id)));
  };

  addBlog = (blog: Blog) => {
    return this.http.post(`${this.serverUrl}/blogs`, blog).pipe(
      tap((x) => {
        console.log('Successfully added blog');
      })
    );
  };

  updateBlog = (blog: Blog, id: number) => {
    return this.http.patch(`${this.serverUrl}/blogs/${id}`, blog).pipe(
      tap((x) => {
        console.log('Successfully updated blog');
      })
    );
  };

  getBlogById = (id: number | string) => {
    return this.http.get(`${this.serverUrl}/blogs/${id}`).pipe(tap((x) => x));
  };
}
