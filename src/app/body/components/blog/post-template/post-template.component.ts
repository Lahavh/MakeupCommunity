import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../post/post.class';

@Component({
  selector: 'post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.less']
})
export class PostTemplateComponent implements OnInit {

  @Input() post: Post;

  @Output() submit: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    if (!this.post) {
      this.post = new Post("", "", this.ngRedux.getState().activeUser.id);
    }
  }

  submitPost() {
    this.submit.emit(this.post);
  }
}
