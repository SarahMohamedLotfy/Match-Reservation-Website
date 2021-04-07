import { Component, OnInit } from '@angular/core';
import { signUpForm } from '../../../src/classes/sign-up-from';
import { userData } from './userData';
import { Router } from '@angular/router';
import { MatchService } from '../match.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  passwordRegex = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
  isEdit =false;
  userObject : userData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    Date: '',
    gender: 'male',
    city: '',
    address: '',
    email: '',
    role: ''
  }
  gender: string ='male';
  // this.userObject.gender: ThemePalette = 'male';


  // model = new signUpForm(
    
  // );

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.isEdit = true;
    console.log("subityyyyy");


  }

  submitSignup(form:any,formObj:any): void {
    this.matchService.submitSignup(formObj)
    .subscribe(
      response => {
        console.log("signed up");
        this.isEdit = true;
        localStorage.setItem('token', response.token)
      },
        error => {
          console.log(error);
        });
      form.resetForm();
      this.isEdit = false;
  }


}
