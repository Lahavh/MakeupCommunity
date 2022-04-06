import { Blog } from "../body/components/blog/blog.class";
import { Post } from "../body/components/blog/post/post.class";
import { User } from "../body/components/user-profile/user.class";


export interface AppState {
    activeUser: User;
    blog: Blog;
    currentEditingPost: Post;
}

export const INITIAL_STATE: AppState = {
    activeUser: null,
    blog: new Blog([]),
    currentEditingPost: null
}