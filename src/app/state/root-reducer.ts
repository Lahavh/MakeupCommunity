import { Action } from "./app-actions";
import { AppState, INITIAL_STATE } from "./app-state";

export function rootReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "LOG_OUT": {
            return INITIAL_STATE;
        }
        case "SIGN_IN": {
            return { ...state, activeUser: action.payload };
        }
        case "ADD_NEW_POST": {
            return { ...state, activeUser: { ...state.activeUser, myPostsIds: [...state.activeUser.myPostsIds, action.payload.id] }, blog: { ...state.blog, posts: [...state.blog.posts, action.payload] } };
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

        case "DELETE_POST": {
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    myPostsIds: state.activeUser.myPostsIds.filter(currentMyPostId => currentMyPostId !== action.payload),
                    likedPostsIds: state.activeUser.likedPostsIds.filter(currentLikedPostId => currentLikedPostId !== action.payload)
                },
                blog: {
                    ...state.blog,
                    posts: state.blog.posts.filter(currentPost => currentPost.id !== action.payload)
                }
            }
        }

        default: {
            return state;
        }
    }
}