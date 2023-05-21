import {
  Component,
  EventEmitter,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private BookService: BookService) {}
  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.BookService.getBooks();
    console.log(this.books);
  }

  ngAfterViewInit(): void {}
  ngOnDestroy(): void {}

  executeEdit = (id: number) => {
    console.log('edit book', id);
  };

  executeDelete = (id: number) => {
    console.log('delete book', id);
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i].isDeleted = true;
      }
    }
  };
}
