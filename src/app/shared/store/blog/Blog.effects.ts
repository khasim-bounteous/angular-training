import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG, LOAD_BLOG_SUCCESS, addBlog, addblogsuccess, deleteBlog, deleteblogsuccess, loadblogsuccess, updateBlog, updateblogsuccess } from "./Blog.actions";
import { EMPTY, catchError, exhaustMap, map, tap } from "rxjs";
import { BlogServiceService } from "../../../services/blog-service.service";
import { BlogModel } from "./Blog.model";

@Injectable()
export class BlogEffects{

    constructor(private action$:Actions,private service:BlogServiceService){}

    _blog=createEffect(()=>{
        return this.action$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap(()=>{
                return this.service.getAllBlogs().pipe(
                    map((data)=>{
                        return loadblogsuccess({bloglist:data})
                    }),
                    catchError(()=>EMPTY)
                )
            }),
        )
    })

    _addBlog = createEffect(()=>
        this.action$.pipe( 
            ofType(addBlog),
            exhaustMap((action)=>{
                return this.service.createBlogs(action.bloginput).pipe(
                    map((data)=>{
                        return addblogsuccess({bloginput: data as BlogModel})
                    }),
                    catchError(()=>EMPTY)
                )
            })
        )
    )

    _updateBlog = createEffect(()=>
        this.action$.pipe(
            ofType(updateBlog),
            exhaustMap((action)=>{
                return this.service.updateBlogs(action.bloginput).pipe(
                    map((data)=>{
                        return updateblogsuccess({bloginput:action.bloginput})
                    }),
                    catchError(()=>EMPTY)
                )
            })
        )
    )

    _deleteBlog = createEffect(()=>
        this.action$.pipe(
            ofType(deleteBlog),
            exhaustMap((action)=>{
                return this.service.deleteBlogs(action.id).pipe(
                    map((data)=>{
                        return deleteblogsuccess({blogId:action.id})
                    }),
                    catchError(()=>EMPTY)
                )
            })
        )
    )
}