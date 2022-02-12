import { NgRedux, select } from '@angular-redux/store';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app-state';
import { User } from '../../user-profile/user.class';
import { Post } from './post.class';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post;

  @select(state => state.activeUser) activeUser$: Observable<User>;

  public isLiked: boolean;
  private subscription: Subscription;

  constructor(private ngRedux: NgRedux<AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.activeUser$.subscribe(activeUserFromState => {
      const foundSamePost = activeUserFromState.likedPosts.find(currentPost => currentPost.id === this.post.id);
      this.isLiked = foundSamePost ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  likePost() {
    if (!this.isLiked) {
      this.ngRedux.dispatch({ type: "LIKE_POST", payload: this.post });
    }
    else {
      this.ngRedux.dispatch({ type: "DISLIKE_POST", payload: this.post });
    }
  }

  editPost() {
    this.router.navigate(["/edit-post", { post: this.post }]);
  }
}