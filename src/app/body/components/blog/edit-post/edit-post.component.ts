import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../post/post.class';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {

  public post: Post;

  constructor(
    private ngRedux: NgRedux<AppState>, 
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.post = this.ngRedux.getState().currentEditingPost;
  }

  editPost(postToEdit: Post) {
    this.http.put(
      "http://localhost:5555/edit-post", postToEdit).subscribe(_ => {
      });
  }
}
