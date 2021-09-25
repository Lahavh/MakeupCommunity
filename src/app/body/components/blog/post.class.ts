import { User } from "../user-profile/user.class";


export class Post {
    title: string;
    body: string;
    timestamp: Date;
    author: User;

    constructor(title: string, body: string, author: User) {
        this.title = title;
        this.body = body;
        this.timestamp = new Date();
        this.author = author;
    }
}