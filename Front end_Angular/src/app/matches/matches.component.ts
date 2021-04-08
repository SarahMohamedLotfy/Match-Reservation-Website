import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';
import { FormsModule } from '@angular/forms';
import { Matchh } from 'src/app/models/matchh';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {

  allMatches : any;
  allTeams: any;
  allVenues:any;
  matchid:any;
  allmainReferee:any;
  alllinesReferee:any;
  alllinesReferee2:any;
  isEdit =false;
  isSameTeam=false;
  matchObject : Matchh ={
    HomeTeam :0,
    AwayTeam:0,
    MatchVenue:'',
    Date:'',
    Time:'',
    MainReferee:'',
    line:'',
    line2:'',
    id:0,
  }
  listTeamsHome:Array<string>=[];
  listTeamsAway:any;


  matchhomeTeams:any;
  matchawayTeams:any;
  matchdet:any;
  matchref:any;
  matchref1:any;
  matchref2:any;
  venueselected:any;
  hometselected:any;
  awaytselected:any;
  mainrefselected:any;
  lines1selected:any;
  lines2selectede:any;
  awaytselectednum:any;
  hometselectednum:any;
  line2refselectednum:any;
  line1refselectednum:any;
  mainrefselectednum:any;
 /* listTeamsHome:Array<string>=["Al Ahly","Zamalek SC",
 "Ismaily","Tersana","Ghazl El Mahalla","El Mokawloon SC","El-Olympi","El Ittihad El Sakndary","El-Masry","Haras El Hodood","ENPPI",
 "El Mansoura SC","El Qanah FC","Suez SC","Misr El Makasa","El Raja","Wadi Degla","Petrojet"];*/
 /*listTeamsAway:Array<string>=["Al Ahly","Zamalek SC",
 "Ismaily","Tersana","Ghazl El Mahalla","El Mokawloon SC","El-Olympi","El Ittihad El Sakndary","El-Masry","Haras El Hodood","ENPPI",
 "El Mansoura SC","El Qanah FC","Suez SC","Misr El Makasa","El Raja","Wadi Degla","Petrojet"];*/

  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.getmatchTeams();
    this.getVenues();
    this.listTeamsHome =this.allTeams;
    this.listTeamsAway =this.allTeams;
    this.getLatesMatch();
    this.getmatchMainReferee();
    this.getmatchlinesReferee();
    this.getmatchlinesReferee2();
  }
  addMatchTeams(form:any,formObj:any): void {
    console.log(formObj);
    this.matchService.addMatchTeams(formObj,this.matchid)
      .subscribe(
        response => {
          this.addMatchReferee(formObj);
          //this.getLatesMatch();
          console.log("Match teams are added");
        },
        error => {
          console.log(error);
        });
      form.resetForm();
  }
  addMatchReferee(formObj:any): void {
    console.log("ahooo");
    console.log(formObj);
    this.matchService.addMatchRef(formObj,this.matchid)
      .subscribe(
        response => {
          console.log("Match referees1 are added");
        },
        error => {
          console.log(error);
        });
        this.matchService.addMatchline1(formObj,this.matchid)
        .subscribe(
          response => {
            console.log("Match referees2 are added");
          },
          error => {
            console.log(error);
          }); 
          this.matchService.addMatchline2(formObj,this.matchid)
          .subscribe(
            response => {
              console.log("Match referees3 are added");
            },
            error => {
              console.log(error);
            });

  }
  addMatchVenu(form:any,formObj:any): void {
    console.log("venuuuuus");
    console.log(formObj);
    this.matchService.AddMatchVenue(formObj)
      .subscribe(
        response => {
          console.log("ffffffffffffff");
          this.matchid = response.ID;
          console.log(this.matchid);
          this.getLatesMatch();
          console.log("Match Venue is added");
        },
        error => {
          console.log(error);
        });

     // form.resetForm();
  }
  
  
  getLatesMatch()
  {
    this.matchService.getAllMatches().subscribe(
      response => {
        this.allMatches = response;
        console.log("mmatches");
        console.log(this.allMatches);
      },
      error => {
        console.log(error);
      });
  }

  ///
  getmatchMainReferee()
  {
    this.matchService.getmainreferee().subscribe(
      response => {
        this.allmainReferee = response;
        console.log("rrefree");
        console.log(this.allmainReferee);
      },
      error => {
        console.log(error);
      });
  }
  getmatchlinesReferee()
  {
    this.matchService.getlinesref().subscribe(
      response => {
        this.alllinesReferee = response;
        console.log("rrefree");
        console.log(this.alllinesReferee);
      },
      error => {
        console.log(error);
      });
  }
  getmatchlinesReferee2()
  {
    this.matchService.getlinesref2().subscribe(
      response => {
        this.alllinesReferee2 = response;
        console.log("rrefree");
        console.log(this.alllinesReferee2);
      },
      error => {
        console.log(error);
      });
  }
  getmatchTeams()
  {
    this.matchService.getmatchTeams().subscribe(
      response => {
        this.allTeams = response;
        console.log("hhhh");
        console.log(this.allTeams);
      },
      error => {
        console.log(error);
      });
  }
  getVenues()
  {
    this.matchService.getVenues().subscribe(
      response => {
        this.allVenues = response;
      },
      error => {
        console.log(error);
      });
  }
  ///
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

    this.matchid=match;
    this.getMatchtVenuebyid();
    this.getMatchtHomeTeamsbyid();
    this.getMatchtawayTeamsbyid();
    this.getMatchtrefbyid();
  }
  updateMatch(form:any,formObj:any)
  {
    this.isEdit=!this.isEdit;
    console.log("assssl");
    console.log(formObj);
    this.matchService.editMatchVenue(formObj, this.matchid).subscribe(()=>
    {
    });
    this.matchService.editMatchTeamsAway(formObj, this.matchid, this.awaytselectednum).subscribe(()=>
    {
    });
    this.matchService.editMatchTeamsHome(formObj, this.matchid, this.hometselectednum).subscribe(()=>
    {
      this.getLatesMatch();
    });
    this.matchService.editmainrefe(formObj, this.matchid, this.mainrefselectednum).subscribe(()=>
    {
      this.getLatesMatch();
    });
    this.matchService.editline1refe(formObj, this.matchid, this.line1refselectednum).subscribe(()=>
    {
      this.getLatesMatch();
    });
    this.matchService.editline2refe(formObj, this.matchid, this.line2refselectednum).subscribe(()=>
    {
      this.getLatesMatch();
    });
      form.resetForm();
  }
  
  selected1()
  {
    this.listTeamsAway=[];
   console.log("gwaa");
    if ( this.matchObject.HomeTeam ==this.matchObject.AwayTeam)
    {
      this.isSameTeam=true;
      alert("You cannot choose same team");
    }
    for (let i=0;i<this.allTeams.length;i++)
    {
      if (this.allTeams[i].ID !=this.matchObject.HomeTeam)
      {
        this.listTeamsAway.push(this.allTeams[i]);
      }
    }
    console.log(this.listTeamsAway);
  }









  getMatchtHomeTeamsbyid()
  {
    this.matchService.getMatchtomeTeamsByid(this.matchid).subscribe(
      response => {
        this.matchhomeTeams = response[0] ;
        this.hometselected= this.matchhomeTeams.team_name;
        this.hometselectednum=this.matchhomeTeams.ID;
      },
      error => {
        console.log(error);
      });
  }
  getMatchtawayTeamsbyid()
  {
    this.matchService.getMatchtwayTeamsByid(this.matchid).subscribe(
      response => {
        this.matchawayTeams = response[0];
        this.awaytselected=this.matchawayTeams.team_name;
        this.awaytselectednum=this.matchawayTeams.ID;
        console.log(this.matchawayTeams);
      },
      error => {
        console.log(error);
      });
  }
  getMatchtVenuebyid()
  {
    this.matchService.getMatchtVenueByid(this.matchid).subscribe(
      response => {
        this.matchdet = response[0] ;
        this.venueselected =this.matchdet.shape;
        console.log("vennn");
        console.log(this.matchdet);
        console.log(this.matchdet.shape);
        
      },
      error => {
        console.log(error);
      });
  }
  getMatchtrefbyid()
  {
    this.matchService.getMatchtmainrefByid(this.matchid).subscribe(
      response => {
        this.matchref = response[0] ;
        this.mainrefselected=this.matchref.first_name;
        this.mainrefselectednum=this.matchref.ID;
        console.log(this.matchref);
      },
      error => {
        console.log(error);
      });
      this.matchService.getMatchtlineByid(this.matchid).subscribe(
        response => {
          this.matchref1 = response[0] ;
          this.lines1selected=this.matchref1.first_name;
          this.line1refselectednum=this.matchref1.ID;
          console.log(this.matchref);
        },
        error => {
          console.log(error);
        });
        this.matchService.getMatchtline2Byid(this.matchid).subscribe(
          response => {
            this.matchref2 = response[0] ;
            this.lines2selectede=this.matchref2.first_name;
            this.line2refselectednum=this.matchref2.ID;
            console.log(this.matchref);
          },
          error => {
            console.log(error);
          });
  }
  
}
