import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.blogForm = fb.group({
      id: [],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      comments: fb.array([new FormControl()]),
    });
    this.commentsFormArray = this.blogForm.controls['comments'] as FormArray;
  }

  deleteComment = (i: number) => {
    this.commentsFormArray.removeAt(i);
  };

  addComment = () => {
    this.commentsFormArray.push(new FormControl());
  };

  onSubmit = () => {
    console.log(this.blogForm.getRawValue());
    //this.blogForm.reset();
  };

  get title() {
    return this.blogForm.get('title') as FormControl;
  }

  get description() {
    return this.blogForm.get('description') as FormControl;
  }

  get author() {
    return this.blogForm.get('author') as FormControl;
  }
}
