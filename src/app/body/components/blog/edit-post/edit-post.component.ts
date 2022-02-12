import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post/post.class';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.less']
})
export class EditPostComponent implements OnInit {

  public post: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => console.log("lalala ", data));   //need to find a way to get the post data from the router
  }

  editPost(postToEdit: Post) {
    console.log("helloooo ", postToEdit);
  }
}
