import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogModel, Blogs } from '../../shared/store/blog/Blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { addBlog, updateBlog } from '../../shared/store/blog/Blog.actions';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss'
})
export class AddBlogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddBlogComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private store: Store<AppStateModel>
  ){}

  ngOnInit(): void {
    console.log(this.data)
    this.blogForm.setValue({
      id: this.data.id,
      title: this.data.title,
      description: this.data.description,
    })
  }

  closepopup(){
    this.dialogRef.close()
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control("",Validators.required),
    description: this.builder.control("",Validators.required)
  })

  saveBlog(){
    if(this.blogForm.valid){
      const _bloginput: BlogModel={
        id:0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }
      if(this.data.isedit){
        _bloginput.id = this.blogForm.value.id as number
        this.store.dispatch(updateBlog({bloginput:_bloginput}))
      }
      else
        this.store.dispatch(addBlog({bloginput:_bloginput}))
      this.closepopup();
    }
  }

}

