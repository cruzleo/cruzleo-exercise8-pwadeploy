import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Subject, tap, filter, map } from 'rxjs';
import { UserService } from '../../user/services/user.service';
import { User } from '../../user/models/user';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  serverUrl = 'http://localhost:3000';
  currentUser = this.userService.getCurrentUser();

  constructor(private http: HttpClient, private userService: UserService) {}

  getBooks = () => {
    return this.http.get(`${this.serverUrl}/books`).pipe(
      map((x: any) => {
        return x.filter((data: Book) => data.userId === this.currentUser.id);
      })
    );
  };

  deleteBook = (id: number | undefined) => {
    return this.http
      .delete(`${this.serverUrl}/books/${id}`)
      .pipe(tap((x) => console.log('Successfully delete book', id)));
  };

  addBook = (book: Book) => {
    return this.http.post(`${this.serverUrl}/books`, book).pipe(
      tap((x) => {
        console.log('Successfully added book');
      })
    );
  };

  updateBook = (book: Book, id: number) => {
    return this.http.patch(`${this.serverUrl}/books/${id}`, book).pipe(
      tap((x) => {
        console.log('Successfully updated book');
      })
    );
  };

  getBookById = (id: number | string) => {
    return this.http.get(`${this.serverUrl}/books/${id}`).pipe(tap((x) => x));
  };
}
