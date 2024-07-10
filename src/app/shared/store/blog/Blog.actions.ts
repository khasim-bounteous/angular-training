import { createAction, createReducer, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS='[blog page] load blog success'
export const LOAD_BLOG ='[blog page] load blog'
export const ADD_BLOG ='[blog page] add blog'
export const ADD_BLOG_SUCCESS ='[blog page] ADD blog success'
export const UPDATE_BLOG = '[blog page] update blog'
export const UPDATE_BLOG_SUCCESS = '[blog page] update blog success'
export const DELETE_BLOG = '[blog page] delete'
export const DELETE_BLOG_SUCCESS = '[blog page] delete blog success'

export const loadBlog = createAction(LOAD_BLOG)
export const addBlog = createAction(ADD_BLOG,props<{bloginput:BlogModel}>())
export const updateBlog = createAction('updateBlog',props<{bloginput:BlogModel}>())
export const deleteBlog = createAction("deleteBlog",props<{id:number}>())


//effects


export const loadblogsuccess = createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>())
export const addblogsuccess = createAction(ADD_BLOG_SUCCESS,props<{bloginput:BlogModel}>())
export const updateblogsuccess = createAction(UPDATE_BLOG_SUCCESS,props<{bloginput:BlogModel}>())
export const deleteblogsuccess = createAction(DELETE_BLOG_SUCCESS,props<{blogId:number}>())
