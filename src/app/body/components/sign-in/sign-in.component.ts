import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../blog/post/post.class';

import { User } from '../user-profile/user.class';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private http: HttpClient
    ) {

  }

  ngOnInit(): void {
  }

  signInClick() {
    this.http.get("http://localhost:5555/user" + "/:" + this.email + "/:" + this.password).subscribe(user => {
      const activeUser = user as User;      
      this.ngRedux.dispatch({
        type: "SIGN_IN",
        payload: activeUser
      });


      this.http.get("http://localhost:5555/posts").subscribe(posts => {
        const allPosts = posts as Post[];
        this.ngRedux.dispatch({
          type: "LOAD_ALL_POSTS",
          payload: allPosts
        })
      });
    });
  }
}
