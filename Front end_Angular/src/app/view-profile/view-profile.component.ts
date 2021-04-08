import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { userData } from '../sign-up/userData';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  passwordRegex = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
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
  submitted = false;

  editUsername = false;
  editDate = false;
  editAddress = false;
  editCity = false;
  editEmail = false;
  editFirstName = false;
  editGender = false;
  editLastName = false;
  editPassword = false;

  constructor(private matchService: MatchService) {
    this.userObject.Date = (localStorage.getItem('day') || "") + (localStorage.getItem('month') || "") + (localStorage.getItem('year') || "")
    this.userObject.address = localStorage.getItem('address') || ""
    this.userObject.city = localStorage.getItem('city') || ""
    this.userObject.email = localStorage.getItem('email') || ""
    this.userObject.firstName = localStorage.getItem('firstName') || ""
    this.userObject.gender = localStorage.getItem('gender') || ""
    this.userObject.lastName = localStorage.getItem('lastName') || ""
    this.userObject.userPassword = localStorage.getItem('password') || ""
    this.userObject.username = localStorage.getItem('username') || ""
   }

  ngOnInit(): void {
  }

  editUser(form:any,formObj:any): void {
    this.matchService.editUser(formObj)
    .subscribe(
      response => {
        console.log("signed up");
        this.isEdit = true;

        localStorage.setItem('day', formObj.day)
        localStorage.setItem('month', formObj.moth)
        localStorage.setItem('year', formObj.year)
        localStorage.setItem('address', formObj.address)
        localStorage.setItem('city', formObj.city)
        localStorage.setItem('email', formObj.email)
        localStorage.setItem('firstName', formObj.firstName)
        localStorage.setItem('gender', formObj.gender)
        localStorage.setItem('lastName', formObj.lastName)
        localStorage.setItem('password', formObj.password)
        localStorage.setItem('username', formObj.username)
      },
        error => {
          console.log(error);
        });
      form.resetForm();
      this.isEdit = false;
      this.editUsername = false;
      this.editDate = false;
      this.editAddress = false;
      this.editCity = false;
      this.editEmail = false;
      this.editFirstName = false;
      this.editGender = false;
      this.editLastName = false;
      this.editPassword = false;
  }

}