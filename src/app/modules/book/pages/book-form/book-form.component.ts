import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  authorsFormArray: FormArray;
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
    this.bookForm = fb.group({
      name: ['', [Validators.required]],
      authors: fb.array([new FormControl()], Validators.required),
      isbn: ['', [Validators.required, Validators.maxLength(10)]],
    });
    this.authorsFormArray = this.bookForm.controls['authors'] as FormArray;
  }

  ngOnInit(): void {
    const param = this.route.snapshot.queryParamMap.get('id');
    this.id = parseInt(param as string);

    if (this.id) {
      this.bookService.getBookById(this.id).subscribe((data: any) => {
        this.bookForm.setValue({
          name: data.name,
          authors: [''],
          isbn: data.isbn,
        });

        data.authors.forEach((author: string) => {
          this.authorsFormArray.push(new FormControl(author));
        });
        this.authorsFormArray.removeAt(0);
      });
    }
  }

  deleteAuthor = (i: number) => {
    this.authorsFormArray.removeAt(i);
  };

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl());
  };

  onSubmit = () => {
    let hasNameError = this.bookForm.get('name')?.errors;
    let hasIsbnError = this.bookForm.get('isbn')?.errors;
    let hasAuthorError = this.bookForm.get('authors')?.errors;

    if (hasNameError || hasIsbnError || hasAuthorError) {
      console.log('Error with inputs');
    } else {
      if (this.id) {
        const book: Book = this.bookForm.getRawValue();
        this.bookService.updateBook(book, this.id).subscribe();
        this.router.navigate(['book']);
      } else {
        const book: Book = this.bookForm.getRawValue();
        this.bookService.addBook(book).subscribe();
        this.router.navigate(['book']);
      }
    }
  };

  get name() {
    return this.bookForm.get('name') as FormControl;
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }
}
