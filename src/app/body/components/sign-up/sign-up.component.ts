import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user-profile/user.class';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  public name: string;
  public email: string;
  public password: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  signUpClick() {
    const userToSave = new User(this.name, this.email, this.password);
    this.http.post(
      "http://localhost:5555/user", userToSave).subscribe();
  }

}
