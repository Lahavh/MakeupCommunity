import { NgRedux, select } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app-state';
import { User } from '../../user-profile/user.class';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { Post } from './post.class';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post;

  @select(state => state.activeUser) activeUser$: Observable<User>;

  @ViewChild("deleteModalTemplateRef") deleteModal: DeleteModalComponent;

  @ViewChild('examplemodal')
  private modalRef: TemplateRef<any>;

  public isLiked: boolean;
  private subscription: Subscription;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.subscription = this.activeUser$.subscribe(activeUserFromState => {
      const foundSamePost = activeUserFromState.likedPostsIds.find(currentLikedPostId => currentLikedPostId === this.post.id);
      this.isLiked = foundSamePost ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  likePost() {
    if (!this.isLiked) {
      this.http.put(
        "http://localhost:5555/like-post", { userId: this.ngRedux.getState().activeUser.id, postId: this.post.id }).subscribe(_ => {
          this.ngRedux.dispatch({ type: "LIKE_POST", payload: this.post.id });
        });
    }
    else {
      this.http.put(
        "http://localhost:5555/dislike-post", { userId: this.ngRedux.getState().activeUser.id, postId: this.post.id }).subscribe(_ => {
          this.ngRedux.dispatch({ type: "DISLIKE_POST", payload: this.post.id });
        });
    }
  }

  editPost() {
    this.ngRedux.dispatch({ type: "EDIT_POST", payload: this.post });
    this.router.navigate(["/edit-post"]);
  }

  openDeleteModal() {
    this.onModalRequest();
  }

  onModalRequest() {
    const modalRef = this.modalService.open(DeleteModalComponent); //Added Modal Component here
    modalRef.componentInstance.src = "lL";//anything u wish to pass to modal component @Input 
    modalRef.result.then((result) => {
      console.log(result);
      console.log('closed');
    }).catch((result) => {
      console.log(result);
      console.log('cancelling');
    });
  }



}