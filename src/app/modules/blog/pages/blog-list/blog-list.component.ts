import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  constructor(private BlogService: BlogService) {}

  blogs: Blog[] = [];

  ngOnInit(): void {
    this.blogs = this.BlogService.getBLogs();
    console.log(this.blogs);
  }

  executeEdit = (id: number) => {
    console.log('edit blog', id);
  };

  executeDelete = (id: number) => {
    console.log('delete blog', id);
    for (let i = 0; i < this.blogs.length; i++) {
      if (this.blogs[i].id === id) {
        this.blogs[i].isDeleted = true;
      }
    }
  };
}
