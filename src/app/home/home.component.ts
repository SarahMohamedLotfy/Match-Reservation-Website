import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userType: number = -1;

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.userType = 1;
  }
}
