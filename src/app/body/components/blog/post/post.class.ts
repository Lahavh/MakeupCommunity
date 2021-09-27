import { User } from "../../user-profile/user.class";
import { v4 as uuidv4 } from "uuid";


export class Post {
    id: string;
    title: string;
    body: string;
    timestamp: Date;
    author: User;

    constructor(title: string, body: string, author: User) {
        this.id = uuidv4();
        this.title = title;
        this.body = body;
        this.timestamp = new Date();
        this.author = author;
    }
}