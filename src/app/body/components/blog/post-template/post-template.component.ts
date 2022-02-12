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

  public postTitle: string;
  public postArticle: string;

  @Output() submit: EventEmitter<Post> = new EventEmitter<Post>();

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  submitPost() {
    const postToSave = new Post(this.postTitle, this.postArticle, this.ngRedux.getState().activeUser.id);
    this.submit.emit(postToSave);
  }
}
