import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  commentsFormArray: FormArray;
  id: number = 0;
  currentUser = this.userService.getCurrentUser();

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.blogForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      comments: fb.array([new FormControl()]),
      userId: [this.currentUser.id],
    });
    this.commentsFormArray = this.blogForm.controls['comments'] as FormArray;
  }

  ngOnInit(): void {
    const param = this.route.snapshot.queryParamMap.get('id');
    this.id = parseInt(param as string);

    if (this.id) {
      this.blogService.getBlogById(this.id).subscribe((data: any) => {
        this.blogForm.setValue({
          title: data.title,
          description: data.description,
          author: data.author,
          comments: [''],
          userId: this.currentUser.id,
        });

        data.comments.forEach((comment: string) => {
          this.commentsFormArray.push(new FormControl(comment));
        });
        this.commentsFormArray.removeAt(0);
      });
    }
  }

  deleteComment = (i: number) => {
    this.commentsFormArray.removeAt(i);
  };

  addComment = () => {
    this.commentsFormArray.push(new FormControl());
  };

  onSubmit = () => {
    let hasTitleError = this.blogForm.get('title')?.errors;
    let hasDesError = this.blogForm.get('description')?.errors;
    let hasAuthorError = this.blogForm.get('author')?.errors;

    if (hasTitleError || hasAuthorError || hasDesError) {
      console.log('Error with inputs');
    } else {
      if (this.id) {
        const blog: Blog = this.blogForm.getRawValue();
        this.blogService.updateBlog(blog, this.id).subscribe();
        this.router.navigate(['blog']);
      } else {
        const blog: Blog = this.blogForm.getRawValue();
        this.blogService.addBlog(blog).subscribe();
        this.router.navigate(['blog']);
      }
    }
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
