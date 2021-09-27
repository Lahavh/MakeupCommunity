import { Post } from "./post/post.class";

export class Blog {
    posts: Post[];

    constructor(posts: Post[]) {
        this.posts = posts;
    }
}