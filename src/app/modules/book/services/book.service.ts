import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks = () => {
    return this.http.get(`${this.serverUrl}/books`).pipe(tap((x) => x));
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
