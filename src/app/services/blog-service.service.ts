import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from '../shared/store/blog/Blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http:HttpClient) { }

  getAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/blogs")
  }

  createBlogs(bloginput: BlogModel){
    return this.http.post("http://localhost:3000/blogs",bloginput).pipe(
      tap(()=>{
        this.http.get<BlogModel>("http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc");
      })
    )
  }

  updateBlogs(bloginput: BlogModel){
    return this.http.put("http://localhost:3000/blogs/"+bloginput.id,bloginput).pipe(
    )
  }
  deleteBlogs(blogid: number){
    return this.http.delete("http://localhost:3000/blogs/"+blogid)
  }


}
