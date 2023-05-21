import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BlogItemComponent, BlogListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class BlogModule {}
