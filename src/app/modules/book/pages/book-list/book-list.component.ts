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
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/user/services/auth.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  constructor(
    private bookService: BookService,
    private router: Router,
    private authService: AuthService
  ) {}

  bookSub: Subscription | undefined;
  books: Book[] = [];

  ngOnInit(): void {
    this.bookSub = this.bookService.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

  ngOnDestroy(): void {
    this.bookSub?.unsubscribe;
  }

  executeEdit = (id: number | undefined) => {
    this.router.navigate([`book/form`], { queryParams: { id: id } });
  };

  executeDelete = (id: number | undefined) => {
    console.log('delete blog', id);
    this.bookSub = this.bookService.deleteBook(id).subscribe();
    window.location.reload();
  };

  executeAdd = () => {
    this.router.navigate(['book/form']);
  };

  executeDeleteAll = () => {
    console.log('delete all');
    const bookIDsArray = this.books.map((book) => book.id);
    bookIDsArray.forEach((id) => {
      this.bookSub = this.bookService.deleteBook(id).subscribe();
    });

    window.location.reload();
  };

  executeLogout = () => {
    this.authService.logout();
    window.location.reload();
  };
}
