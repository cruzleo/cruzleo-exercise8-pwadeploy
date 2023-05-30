import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Subject, map, tap } from 'rxjs';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  serverUrl = 'http://localhost:3000';

  blogsSubject = new Subject();
  currentUser = this.userService.getCurrentUser();
  constructor(private http: HttpClient, private userService: UserService) {}

  getBlogs = () => {
    return this.http.get(`${this.serverUrl}/blogs`).pipe(
      map((x: any) => {
        return x.filter((data: Blog) => data.userId === this.currentUser.id);
      })
    );
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
