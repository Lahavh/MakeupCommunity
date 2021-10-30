import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../body/components/user-profile/user.class';
import { AppState } from '../state/app-state';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  @select(state => state.activeUser) activeUser$: Observable<User>;

  constructor(private ngRedux: NgRedux<AppState>) {}

  ngOnInit(): void {
  }

  onLogout() {
    this.ngRedux.dispatch({type: "LOG_OUT"});
  }
}
