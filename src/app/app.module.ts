import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { AppComponent } from './app.component';
import { AppState, INITIAL_STATE } from './state/app-state';
import { rootReducer } from './state/root-reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './body/components/about/about.component';
import { BlogComponent } from './body/components/blog/blog.component';
import { PostComponent } from './body/components/blog/post/post.component';
import { SignUpComponent } from './body/components/sign-up/sign-up.component';
import { SignInComponent } from './body/components/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './body/components/user-profile/user-profile.component';
import { AddPostComponent } from './body/components/blog/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { LikedPostsComponent } from './body/components/user-profile/liked-posts/liked-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BlogComponent,
    PostComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    AddPostComponent,
    LikedPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [createLogger({diff: true, collapsed: true})]);
  }
}
