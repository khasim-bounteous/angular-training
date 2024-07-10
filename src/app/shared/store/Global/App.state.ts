import { blogReducer } from "../blog/Blog.reducer";
import { counterReducer } from "../counter/counter.reducer";

export const AppState = {
    counter: counterReducer,
    blog: blogReducer
}