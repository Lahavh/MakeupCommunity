import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-profile/user.class';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  public name = "";
  public email = "";
  public emailVerification = "";
  public password = "";
  public passwordVerification = "";
  public nameValidator = true;
  public emailValidator = true;
  public emailVerificationValidator = true;
  public passwordValidator = true;
  public passwordVerificationValidator = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  signUpClick() {
    this.checkValications();

    // const userToSave = new User(this.name, this.email, this.password);
    // this.http.post(
    //   "http://localhost:5555/user", userToSave).subscribe();
    }

    checkValications() {
      if (this.name.length > 2 && !/\d/.test(this.name)) {
        this.nameValidator = true;
      }
      else {
        this.nameValidator = false;
      }

      if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.email)) {
        this.emailValidator = true;
      }
      else {
        this.emailValidator = false;
      }

      if (this.emailVerification === this.email) {
        this.emailVerificationValidator = true;
      }
      else {
        this.emailVerificationValidator = false; 
      }

      if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(this.password)){
        this.passwordValidator = true;
      }
      else{
        this.passwordValidator = false;
      }

      if (this.passwordVerification === this.password) {
        this.passwordVerificationValidator = true;
      }
      else {
        this.passwordVerificationValidator = false; 
      }

  }
}
