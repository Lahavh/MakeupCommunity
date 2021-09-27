import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../blog/post/post.class';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent implements OnInit {

  @select(state => state.activeUser.likedPosts) likedPosts$: Observable<Post[]>;

  constructor() { }

  ngOnInit() {
  }
}
