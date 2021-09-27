import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { User } from '../user-profile/user.class';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>) {

  }

  ngOnInit(): void {
  }

  signInClick() {
    const activeUser: User = {
      name: "Ron Tahan",
      email: "ron2014@gmail.com",
      password: "ron1132000",
      profilePicture: "lala",
      myPosts: [],
      likedPosts: []
    };

    this.ngRedux.dispatch({
      type: "SIGN_IN",
      payload: activeUser
    });
  }
}
