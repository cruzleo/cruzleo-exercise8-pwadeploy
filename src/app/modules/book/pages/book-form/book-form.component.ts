import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorsFormArray: FormArray;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // if (id) {
    //   console.log('hello');
    // } else {}

    this.bookForm = fb.group({
      id: [],
      name: ['', [Validators.required]],
      authors: fb.array([new FormControl()], Validators.required),
      isbn: ['', [Validators.required, Validators.maxLength(10)]],
    });
    this.authorsFormArray = this.bookForm.controls['authors'] as FormArray;
  }

  deleteAuthor = (i: number) => {
    this.authorsFormArray.removeAt(i);
  };

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl());
  };

  onSubmit = () => {
    console.log(this.bookForm.getRawValue());
    //this.bookForm.reset();
  };

  get name() {
    return this.bookForm.get('name') as FormControl;
  }

  get isbn() {
    return this.bookForm.get('isbn') as FormControl;
  }
}
