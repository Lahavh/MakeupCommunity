import { Post } from "../blog/post.class";

export class User {
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    myPosts: Post[];
    likedPosts: Post[];

    constructor() {

    }
}