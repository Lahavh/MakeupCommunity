import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../state/app-state';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit/*, OnDestroy*/ {


  @select(state => state.isUserSignedIn) isUserSignedIn$: Observable<boolean>;
  //isUserSIgnedIn: boolean;
  //sub: Subscription;

  constructor(private ngRedux: NgRedux<AppState>) { 
    //this.sub = this.isUserSignedIn$.subscribe(isUserSignedInFromState => this.isUserSIgnedIn = isUserSignedInFromState);
  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  ngOnInit(): void {
  }

  onLogout() {
    this.ngRedux.dispatch({type: "LOG_OUT"});
  }

}
