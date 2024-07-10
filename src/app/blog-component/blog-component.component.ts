import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../shared/store/blog/Blog.model';
import { getBlog } from '../shared/store/blog/Blog.selectors';
import { AppStateModel } from '../shared/store/Global/AppState.model';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { deleteBlog, loadBlog } from '../shared/store/blog/Blog.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.scss'
})
export class BlogComponentComponent {
  
  constructor(
    private store: Store<AppStateModel>,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ){

  }

  blogList !: BlogModel[]

  ngOnInit(){
    this.store.dispatch(loadBlog())
    this.store.select(getBlog).subscribe(item=>{
      this.blogList = item
    })
  }

  addBlog(){
    this.openPopup(0,'','',false)
  }

  openPopup(id:number,title:string,description:string,isedit=false,){
    this.dialog.open(AddBlogComponent,{
      width:'40%',
      data:{
        id,
        title,
        description,
        isedit
      }
    })
  }

  editBlog(item:BlogModel){
    this.openPopup(item.id,item.title,item.description,true)
  }

  removeBlog(id:number){
    if(confirm("Are you sure want to remove"))
    {
      this.store.dispatch(deleteBlog({id:id}))
      this.snackBar.open('Item deleted', '', {
        duration: 3000
      });
    }
  }

}
