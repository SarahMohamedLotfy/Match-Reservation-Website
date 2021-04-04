import { Component, OnInit } from '@angular/core';
import { signUpForm } from '../../../src/classes/sign-up-from';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passwordRegex = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;

  // model = new signUpForm(
    
  // );

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

}
