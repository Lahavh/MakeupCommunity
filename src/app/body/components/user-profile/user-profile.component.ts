import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../blog/post.class';
import { User } from './user.class';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  @select(state => state.activeUser) activeUser$: Observable<User>;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }
}
