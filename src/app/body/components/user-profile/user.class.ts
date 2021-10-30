import { Post } from "../blog/post/post.class";
import { v4 as uuidv4 } from "uuid";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    myPosts: Post[];
    likedPosts: Post[];

    constructor(name: string, email: string, password: string, profilePicture = "") {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.myPosts = [];
        this.likedPosts = [];
    }
}