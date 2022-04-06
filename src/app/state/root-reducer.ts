import { Action } from "./app-actions";
import { AppState } from "./app-state";

export function rootReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "LOG_OUT": {
            return { ...state, activeUser: null };
        }
        case "SIGN_IN": {
            return { ...state, activeUser: action.payload };
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
        case "LOAD_ALL_POSTS": {
            return { ...state, blog: {
                ...state.blog, posts: action.payload
            }};
        }
        case "DISLIKE_POST": {
            return {
                ...state, activeUser: {
                    ...state.activeUser, likedPosts: state.activeUser.likedPosts.filter(currentPost => currentPost.id !== action.payload.id)
                }
            };
        }
        case "EDIT_POST": {
            return {
                ...state,
                currentEditingPost: action.payload
            };
        }

        default: {
            return state;
        }
    }
}