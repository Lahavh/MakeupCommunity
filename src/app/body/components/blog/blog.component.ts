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
export class BlogComponent implements OnInit, OnDestroy {

  @select(state => state.activeUser.myPosts) myPosts$: Observable<Post[]>;
  public myPosts: Post[];
  private subscription: Subscription;

  constructor() {
    this.subscription = this.myPosts$.subscribe(myPostsFromState => this.myPosts = myPostsFromState);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
