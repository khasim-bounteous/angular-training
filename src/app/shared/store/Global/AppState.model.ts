import { Blogs } from "../blog/Blog.model";
import { counterModel } from "../counter/counter.model";

export interface AppStateModel{
    counter: counterModel,
    blog: Blogs
}