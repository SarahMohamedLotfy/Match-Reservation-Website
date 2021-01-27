import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})

export class AddMatchComponent implements OnInit {

  allMatches : any;
  AllStaduims : any;

  isEdit =false;
  isSameTeam=false;
  matchObject={
    HomeTeam :'',
    AwayTeam:'',
    MatchVenue:'',
    Date:'',
    Time:'',
    MainReferee:'',
    Linesman:'',
    Linesman2:'',
    id:'',
  }
  listTeamsHome:Array<string>=["Al Ahly","Zamalek SC",
 "Ismaily","Tersana","Ghazl El Mahalla","El Mokawloon SC","El-Olympi","El Ittihad El Sakndary","El-Masry","Haras El Hodood","ENPPI",
 "El Mansoura SC","El Qanah FC","Suez SC","Misr El Makasa","El Raja","Wadi Degla","Petrojet"];
 listTeamsAway:Array<string>=["Al Ahly","Zamalek SC",
 "Ismaily","Tersana","Ghazl El Mahalla","El Mokawloon SC","El-Olympi","El Ittihad El Sakndary","El-Masry","Haras El Hodood","ENPPI",
 "El Mansoura SC","El Qanah FC","Suez SC","Misr El Makasa","El Raja","Wadi Degla","Petrojet"];

  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.getLatesMatch();
    this.getSatduims();
  }
  addMatch(form:any,formObj:any): void {
    this.matchService.AddMatch(formObj)
      .subscribe(
        response => {
          this.getLatesMatch();
          console.log("Match is added");
        },
        error => {
          console.log(error);
        });

      form.resetForm();
  }
  getLatesMatch()
  {
    this.matchService.getAllMatches().subscribe(
      response => {
        this.allMatches = response;
      },
      error => {
        console.log(error);
      });
  }
  deleteMatch(match:any)
  {
    this.matchService.deleteMatch(match).subscribe(()=>
    {
      this.getLatesMatch();
    }
    );
  }
  editMatch (match:any)
  {
    this.isEdit=true;
    this.matchObject=match;
  }
  updateMatch(form:any)
  {
    this.isEdit=!this.isEdit;
    this.matchService.editMatch(this.matchObject).subscribe(()=>
    {
      this.getLatesMatch();
      form.resetForm();
    }
    );
  }
  getSatduims()
  {
    this.matchService.getAllStaduim().subscribe(
      response => {
        this.AllStaduims = response;
      },
      error => {
        console.log(error);
      });
    }
  selected1()
  {
    this.listTeamsAway=[];

    if ( this.matchObject.HomeTeam ==this.matchObject.AwayTeam)
    {
      this.isSameTeam=true;
      alert("You cannot choose same team");
    }
    for (let i=0;i<18;i++)
    {
      if (this.listTeamsHome[i] !=this.matchObject.HomeTeam)
      {
        this.listTeamsAway.push(this.listTeamsHome[i]);
      }
    }
    this.listTeamsAway=this.listTeamsAway;
    //this.listTeamsAway.splice(0, 1);
    /*var self = this;
    this.listTeamsAway = this.listTeamsAway.filter(function(item) {
      return item !== self.matchObject.HomeTeam;
  })*/
  }
  
}
