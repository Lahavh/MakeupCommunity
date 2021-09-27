import { Blog } from "../body/components/blog/blog.class";
import { User } from "../body/components/user-profile/user.class";


export interface AppState {
    isUserSignedIn: boolean;
    activeUser: User;
    blog: Blog;
}

export const INITIAL_STATE: AppState = {
    isUserSignedIn: false,
    activeUser: null,
    blog: new Blog([])
}