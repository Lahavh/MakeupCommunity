import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app-state';
import { User } from '../../user-profile/user.class';
import { Post } from '../post.class';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {

  public postTitle: string;
  public postArticle: string;
  public postUser: User;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {

  }

  addNewPost(){
    this.postUser = this.ngRedux.getState().activeUser;
    this.ngRedux.dispatch({type: "ADD_NEW_POST", payload: new Post(this.postTitle, this.postArticle, this.postUser)});
  }
}

