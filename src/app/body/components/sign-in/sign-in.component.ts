import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/state/app-state';
import { Post } from '../blog/post/post.class';

import { User } from '../user-profile/user.class';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  public email = "";
  public password = "";
  public validSignIn = true;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  signInClick() {
    if (this.email !== "" && this.password != "") {
       this.http.get("http://localhost:5555/user" + "/:" + this.email + "/:" + this.password).subscribe(user => {
        const activeUser = user as User;
        if (!activeUser) {
          this.validSignIn = false;
          return;
        }

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

        setTimeout(() => {
          this.router.navigate(["/blog"]);      
        }, 500);
      });
    }
  }
}
