import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import * as $ from 'jquery' 

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private matchService: MatchService) { }
  match:any;
  seats:any;
  id:any;
  numberofseats=20;
  vacantseats :Array<number>=[];

  ii=0;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getLatesMatch();
    this.getAllSeatsNumbers();
  }
  getLatesMatch()
  {
    this.matchService.getMatch(this.id).subscribe(
      response => {
        this.match = response;
      },
      error => {
        console.log(error);
      });
  }
  getAllSeatsNumbers()
  {
    console.log(this.id);
    this.matchService.getSeats(this.id).subscribe(
      response => {
        this.seats = response;
        console.log(this.seats);

      },
      error => {
        console.log(error);
      });
  }
}
