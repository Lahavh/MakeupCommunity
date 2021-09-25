import { Blog } from "../body/components/blog/blog.class";
import { Action } from "./app-actions";
import { AppState } from "./app-state";

export function rootReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "LOG_OUT": {
            return { ...state, isUserSignedIn: false };
        }
        case "SIGN_IN": {
            return { ...state, isUserSignedIn: true, activeUser: action.payload };
        }
        case "ADD_NEW_POST": {
            return { ...state, activeUser: { ...state.activeUser, myPosts: [...state.activeUser.myPosts, action.payload] }, blog: { ...state.blog, posts: [...state.blog.posts, action.payload] } };
        }
        case "LIKE_POST": {
            return {
                ...state, activeUser: {
                    ...state.activeUser, likedPosts: [
                        ...state.activeUser.likedPosts, action.payload
                    ]
                }
            };
        }
        default: {
            return state;
        }
    }
}