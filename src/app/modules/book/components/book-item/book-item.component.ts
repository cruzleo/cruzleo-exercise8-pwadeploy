import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input('booksInput') book: Book | undefined;
  @Output() editActionEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() deleteActionEmitter: EventEmitter<Book> = new EventEmitter<Book>();

  editBook = (id: number | undefined) => {
    this.editActionEmitter.emit(this.book);
  };

  deleteBook = (id: number | undefined) => {
    this.deleteActionEmitter.emit(this.book);
  };
}
