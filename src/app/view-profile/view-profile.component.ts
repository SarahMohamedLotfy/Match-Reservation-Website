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
  submitted = false;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }

  submitSignup(form:any,formObj:any): void {
    this.matchService.submitSignup(formObj)
    .subscribe(
      response => {
        console.log("signed up");
        this.isEdit = true;
      },
        error => {
          console.log(error);
        });
      form.resetForm();
      this.isEdit = false;
  }

}
