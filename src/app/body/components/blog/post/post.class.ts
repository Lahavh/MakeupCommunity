import { v4 as uuidv4 } from "uuid";


export class Post {
    id: string;
    title: string;
    body: string;
    timestamp: Date;
    authorId: string;

    constructor(title: string, body: string, authorId: string) {
        this.id = uuidv4();
        this.title = title;
        this.body = body;
        this.timestamp = new Date();
        this.authorId = authorId;
    }
}