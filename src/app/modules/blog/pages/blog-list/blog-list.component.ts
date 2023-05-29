import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/user/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  constructor(
    private blogService: BlogService,
    private router: Router,
    private authService: AuthService
  ) {}

  blogsSub: Subscription | undefined;
  blogs: Blog[] = [];

  ngOnInit(): void {
    this.blogsSub = this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
    });
  }

  ngOnDestroy(): void {
    this.blogsSub?.unsubscribe();
  }

  executeEdit = (id: number | undefined) => {
    this.router.navigate([`blog/form`], { queryParams: { id: id } });
  };

  executeDelete = (id: number | undefined) => {
    console.log('delete blog', id);
    this.blogsSub = this.blogService.deleteBlog(id).subscribe();

    this.blogsSub?.unsubscribe();
    this.blogsSub = this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
    });
  };

  executeAdd = () => {
    this.router.navigate(['blog/form']);
  };

  executeDeleteAll = () => {
    console.log('delete all');
    const blogIDsArray = this.blogs.map((blog) => blog.id);
    blogIDsArray.forEach((id) => {
      this.blogsSub = this.blogService.deleteBlog(id).subscribe();
    });

    this.blogsSub?.unsubscribe();
    this.blogsSub = this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data;
    });
  };

  executeLogout = () => {
    this.authService.logout();
    this.router.navigate(['login']);
  };
}
