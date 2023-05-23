import {
  Component,
  EventEmitter,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  constructor(private BookService: BookService, private router: Router) {}
  books: Book[] = [];

  ngOnInit(): void {
    this.books = this.BookService.getBooks();
  }

  executeEdit = (id: number) => {
    //this.router.navigate([`book/form/${id}`]);
    this.router.navigate([`book/form`]);
  };

  executeDelete = (id: number) => {
    console.log('delete book', id);
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i].isDeleted = true;
      }
    }
  };

  executeAdd = () => {
    this.router.navigate(['book/form']);
  };

  executeDeleteAll = () => {
    this.books = [];
  };
}
