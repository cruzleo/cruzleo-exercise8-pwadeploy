import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'Harry Potter and the Order of the Phoenix',
      authors: ['J.K Rowling'],
      isbn: '9845213X19',
      isDeleted: false,
    },
    {
      id: 2,
      name: 'Pride and Prejudice',
      authors: ['Jane Austen', 'Anna Quindlen'],
      isbn: '107823456X',
      isDeleted: false,
    },
    {
      id: 3,
      name: 'The Hunger Games',
      authors: ['Suzanne Collins'],
      isbn: '7546792318',
      isDeleted: false,
    },
    {
      id: 4,
      name: 'The Fault in Our Stars',
      authors: ['John Green'],
      isbn: '234123458',
      isDeleted: false,
    },
    {
      id: 5,
      name: 'The Da Vinci Code',
      authors: ['Dan Brown'],
      isbn: '5621454890',
      isDeleted: false,
    },
  ];

  constructor() {}

  getBooks = () => {
    return this.books;
  };
}
