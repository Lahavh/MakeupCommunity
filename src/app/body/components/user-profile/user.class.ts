import { Post } from "../blog/post/post.class";
import { v4 as uuidv4 } from "uuid";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    myPostsIds: string[];
    likedPostsIds: string[];

    constructor(name: string, email: string, password: string, profilePicture = "") {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.myPostsIds = [];
        this.likedPostsIds = [];
    }
}