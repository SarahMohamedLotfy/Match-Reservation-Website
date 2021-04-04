import { Component, OnInit } from '@angular/core';
import {ViewMatchDetailService} from './view-match-detail.service';
import { MatchService } from '../match.service';

export interface PeriodicElement {
  HomeTeam: string;
  AwayTeam: string;
  MatchVenue: string;
  DateTime: string;
  MainReferee: string;
  TwoLinesmen: string;
  position: number;
}

// 1. Home Team. (One of possible 18 teams)
// 2. Away Team. (One of possible 18 teams, should not be the same as the home
//   team).
//   3. Match Venue (One of the stadiums approved by the EFA managers)
//   4. Date & Time.
//   5. Main Referee.
//   6. Two Linesmen.

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, HomeTeam: 'one team', AwayTeam: 'another team', MatchVenue: 'stadium', DateTime: '9/4/2021, 11:59pm', MainReferee: 'Referee', TwoLinesmen: 'two good men'},
  {position: 2, HomeTeam: 'one team', AwayTeam: 'another team', MatchVenue: 'stadium', DateTime: '9/4/2021, 11:59pm', MainReferee: 'Referee', TwoLinesmen: 'two good men'},
  {position: 3, HomeTeam: 'one team', AwayTeam: 'another team', MatchVenue: 'stadium', DateTime: '9/4/2021, 11:59pm', MainReferee: 'Referee', TwoLinesmen: 'two good men'},
  {position: 4, HomeTeam: 'one team', AwayTeam: 'another team', MatchVenue: 'stadium', DateTime: '9/4/2021, 11:59pm', MainReferee: 'Referee', TwoLinesmen: 'two good men'},
  {position: 5, HomeTeam: 'one team', AwayTeam: 'another team', MatchVenue: 'stadium', DateTime: '9/4/2021, 11:59pm', MainReferee: 'Referee', TwoLinesmen: 'two good men'},
];

@Component({
  selector: 'app-view-match-detail',
  templateUrl: './view-match-detail.component.html',
  styleUrls: ['./view-match-detail.component.css']
})
export class ViewMatchDetailComponent implements OnInit {

  // need to be updated dynamically with the home page
  auth;

  constructor(service: ViewMatchDetailService) {
    this.auth = service.getAuthentication();
   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'HomeTeam', 'AwayTeam', 'MatchVenue', 'DateTime', 'MainReferee', 'TwoLinesmen'];
  dataSource = ELEMENT_DATA;


}
