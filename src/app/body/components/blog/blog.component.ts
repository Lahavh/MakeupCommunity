import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user-profile/user.class';
import { Post } from './post/post.class';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  
  @select(state => state.activeUser) activeUser$: Observable<User>;
  @select(state => state.blog.posts) allPosts$: Observable<Post[]>;

  constructor() {}

  ngOnInit() {}
}