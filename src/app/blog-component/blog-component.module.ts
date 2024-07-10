import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogComponentComponent } from './blog-component.component';
import { MaterialModule } from '../Material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBlogComponent,
    BlogComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class BlogComponentModule { }
