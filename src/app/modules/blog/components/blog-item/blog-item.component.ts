import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input('blogsInput') blog: Blog | undefined;
  @Output() editBlogEmmitter: EventEmitter<Blog> = new EventEmitter<Blog>();
  @Output() deleteBlogEmmiter: EventEmitter<Blog> = new EventEmitter<Blog>();

  editBlog = (id: number | undefined) => {
    return this.editBlogEmmitter.emit(this.blog);
  };

  deleteBlog = (id: number | undefined) => {
    return this.deleteBlogEmmiter.emit(this.blog);
  };
}
