
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
    userPassword: '',
    firstName: '',
    lastName: '',
    Date: '',
    gender: 'male',
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
        console.log(response);

        this.successful = true;
        this.wrongUser = false;
        localStorage.setItem('token', response.token);
        localStorage.setItem('firstName', response[0].first_name);
        localStorage.setItem('lastName', response[0].last_name);
        localStorage.setItem('address', response[0].address);
        localStorage.setItem('city',  response[0].city);
        localStorage.setItem('email',  response[0].mail);
        localStorage.setItem('day',  response[0].day);
        localStorage.setItem('month',  response[0].month);
        localStorage.setItem('year',  response[0].year);
        localStorage.setItem('gender',  response[0].gender);
        localStorage.setItem('password', response[0].pass);
      //  localStorage.setItem('username', response[0].user_name);


        let userType = ""
       // this.matchService.getUserType(response.user_name)

      this.matchService.getUserType(formObj.username)
      .subscribe( res => {
        console.log("tyyyyype111")
        userType = res[0].user_type
        console.log(res[0].user_type)
        localStorage.setItem('userType', userType)

        console.log("fff")
        console.log(res[0])
    }, error => {console.log(error)})

      console.log("usesssssssssrname")
      console.log(formObj.username)

        //localStorage.setItem('userType', userType)
        console.log("hhhhqqqqqq")
        console.log(localStorage.getItem("userType") || "")
        console.log("hhhhqqqqqq22222222")
        console.log(userType);

        localStorage.setItem('username', formObj.username)
        console.log("paaaaas")
        console.log(formObj.password);

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