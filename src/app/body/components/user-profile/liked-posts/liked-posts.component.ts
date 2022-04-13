import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../../blog/post/post.class';
import { User } from '../user.class';

@Component({
  selector: 'app-liked-posts',
  templateUrl: './liked-posts.component.html',
  styleUrls: ['./liked-posts.component.css']
})
export class LikedPostsComponent implements OnInit {

  @select(state => state.activeUser) activeUser$: Observable<User>;

  public likedPosts: Post[];
  private subscription: Subscription;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.subscription = this.activeUser$.subscribe(activeUserFromState => {
      this.likedPosts = [];
      const allPostsFromState = this.ngRedux.getState().blog.posts;
      activeUserFromState.likedPostsIds.forEach(currentLikedPostId => this.likedPosts.push(allPostsFromState.find(currentPost => currentPost.id === currentLikedPostId)));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
