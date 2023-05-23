import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BlogItemComponent, BlogListComponent, BlogFormComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class BlogModule {}
