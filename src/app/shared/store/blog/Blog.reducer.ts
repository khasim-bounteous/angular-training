import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { increment } from "../counter/counter.actions";
import { addBlog, addblogsuccess, deleteBlog, deleteblogsuccess, loadBlog, loadblogsuccess, updateBlog, updateblogsuccess } from "./Blog.actions";

const _blogReducer = createReducer(BlogState,

    on(loadBlog,(state)=>{
        return {
            ...state
        }
    }),
    on(loadblogsuccess,(state,action)=>{
        return {
            ...state,
            blogList:[...action.bloglist]
        }
    }),
    // on(addBlog,(state,action)=>{
    //     const _blog = {...action.bloginput}
    //     const _id = state.blogList.length+1
    //     return {
    //         ...state,
    //         blogList: [...state.blogList,_blog]
    //     }
    // }),
    // on(updateBlog,(state,action)=>{
    //     const _blog = {...action.bloginput}
    //     const updateBlog = state.blogList.map((data)=>{
    //         return data.id == _blog.id ? _blog : data
    //     })
    //     return {
    //         ...state,
    //         blogList: updateBlog
    //     }
    // }),
    // on(deleteBlog,(state,action)=>{
    //     const _id = action.id
    //     const _blogs = state.blogList.filter((data)=>data.id!=_id)
    //     return {
    //         ...state,
    //         blogList: _blogs
    //     }
    // }),

    // ****************
    on(addblogsuccess,(state,action)=>{
        const _blog = {...action.bloginput}
        return {
            ...state,
            blogList: [...state.blogList,_blog]
        }
    }),

    on(updateblogsuccess,(state,action)=>{
        const _blog = {...action.bloginput}
        const updateBlog = state.blogList.map((data)=>{
            return data.id == _blog.id ? _blog : data
        })
        return {
            ...state,
            blogList: updateBlog
        }
    }),
    on(deleteblogsuccess,(state,action)=>{
        const _id = action.blogId
        const _blogs = state.blogList.filter((data)=>data.id!=_id)
        return {
            ...state,
            blogList: _blogs
        }
    }),

)

export function blogReducer(state:any,action:any){
    return _blogReducer(state,action)
}