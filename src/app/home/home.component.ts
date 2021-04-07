import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userType: string = '-1';

  constructor(public matchService: MatchService) {
    this.userType = localStorage.getItem("userType") || ""
   }

  ngOnInit(): void {
    this.userType = '1';
    // initiate the user type to be guest (2)
    localStorage.setItem('userType', '2')
  }
}
