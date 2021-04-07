import { Component, OnInit } from '@angular/core';
import { userData } from '../sign-up/userData';
import {MatchService} from 'src/app/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private matchService: MatchService, private _router: Router) { }

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
    gender: 'mail',
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
        localStorage.setItem('token', response.token)

        let userType = ""
        this.matchService.getUserType(response.user_name)
        .subscribe( res => {
          console.log("username")
          userType = res.user_type
      }, error => {console.log(error)})
        
        localStorage.setItem('userType', userType)
        localStorage.setItem('username', response.user_name)
        localStorage.setItem('password', response.password)
        localStorage.setItem('firstName', response.first_name)
        localStorage.setItem('lastName', response.last_name)
        localStorage.setItem('address', response.address)
        localStorage.setItem('city', response.city)
        localStorage.setItem('email', response.mail)
        localStorage.setItem('day', response.day)
        localStorage.setItem('month', response.month)
        localStorage.setItem('year', response.year)
        localStorage.setItem('gender', response.gender)
        this._router.navigate(['/'])
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
