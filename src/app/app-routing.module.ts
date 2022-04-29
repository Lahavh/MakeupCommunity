import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/components/about/about.component';
import { BlogComponent } from './body/components/blog/blog.component';
import { SignUpComponent } from './body/components/sign-up/sign-up.component';
import { SignInComponent } from './body/components/sign-in/sign-in.component';
import { UserProfileComponent } from './body/components/user-profile/user-profile.component';
import { AddPostComponent } from './body/components/blog/add-post/add-post.component';
import { LikedPostsComponent } from './body/components/user-profile/liked-posts/liked-posts.component';
import { EditPostComponent } from './body/components/blog/edit-post/edit-post.component';
import { HomeComponent } from './body/components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "add-post",
    component: AddPostComponent
  },
  {
    path: "edit-post",
    component: EditPostComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "user-profile",
    component: UserProfileComponent
  },
  {
    path: "liked-posts",
    component: LikedPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }