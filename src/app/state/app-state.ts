import { Blog } from "../body/components/blog/blog.class";
import { User } from "../body/components/user-profile/user.class";


export interface AppState {
    activeUser: User;
    blog: Blog;
}

export const INITIAL_STATE: AppState = {
    activeUser: null,
    blog: new Blog([])
}