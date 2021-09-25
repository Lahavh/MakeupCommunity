import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../post.class';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit(): void {
  }

  likePost() {
    this.ngRedux.dispatch({ type: "LIKE_POST", payload: this.post });
  }
}
