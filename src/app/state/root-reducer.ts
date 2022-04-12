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
            return { ...state, activeUser: { ...state.activeUser, myPostsIds: [...state.activeUser.myPostsIds, action.payload] }, blog: { ...state.blog, posts: [...state.blog.posts, action.payload] } };
        }
        case "LIKE_POST": {
            return {
                ...state, activeUser: {
                    ...state.activeUser, likedPostsIds: [
                        ...state.activeUser.likedPostsIds, action.payload
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
                    ...state.activeUser, likedPostsIds: state.activeUser.likedPostsIds.filter(currentPostId => currentPostId !== action.payload)
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