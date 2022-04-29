import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-profile/user.class';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @select(state => state.activeUser) activeUser$: Observable<User>;

  constructor() { }

  ngOnInit(): void {
  }

}