import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../blog/post/post.class';
import { User } from './user.class';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  @select(state => state.activeUser) activeUser$: Observable<User>;

  public myPosts: Post[];
  private subscription: Subscription;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.subscription = this.activeUser$.subscribe(activeUserFromState => {
      if (activeUserFromState) {
        this.myPosts = [];
        const allPostsFromState = this.ngRedux.getState().blog.posts;
        activeUserFromState.myPostsIds.forEach(currentMyPostId => this.myPosts.push(allPostsFromState.find(currentPost => currentPost.id === currentMyPostId)));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
