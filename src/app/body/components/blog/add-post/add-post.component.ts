import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { User } from '../../user-profile/user.class';
import { Post } from '../post/post.class';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<AppState>,
    private http: HttpClient
    ) {}

  ngOnInit() {}

  addNewPost(postToSave: Post) {
    this.http.post(
      "http://localhost:5555/post", postToSave).subscribe(_ => {
        this.http.put("http://localhost:5555/post", postToSave).subscribe(_ => {
          this.ngRedux.dispatch({ type: "ADD_NEW_POST", payload: postToSave });
        });
      });
  }
}