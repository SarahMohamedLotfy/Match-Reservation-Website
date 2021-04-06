import { Component, OnInit } from '@angular/core';
import { userData } from '../sign-up/userData';
import {MatchService} from 'src/app/match.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  successful = false;
  wrongUser = false;
  isEdit =false;
  userObject : userData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    Date: '',
    gender: true,
    city: '',
    address: '',
    email: '',
    role: ''
  }

  submitLogin(form:any,formObj:any): void {
    this.matchService.submitLogin(formObj)
    .subscribe(
      response => {
        console.log("logged in");
        this.successful = true;
        this.wrongUser = false;
      },
        error => {
          console.log(error);
          this.wrongUser = true;
          this.successful = false;
        });
      form.resetForm();
      this.wrongUser = false;
      this.successful = false;
  }

}
