import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import * as $ from 'jquery' 
import { visitValue } from '@angular/compiler/src/util';



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {


  constructor(private router: Router,private route: ActivatedRoute,private matchService: MatchService) { }
  matchhomeTeams:any;
  username:any
  matchawayTeams:any;
  matchdet:any;
  matchref:any;
match:any;
  seats:any;
  id:any;
  seatsreserved:any;
  numberofseats:any;
  vacantseats :Array<number>=[];
  ticketnumber=3;
  ii=0;
  matchref1:any;
  matchref2:any;
  seatsofuser:any;
  options:Array<string>=[];
  selected:Array<string>=[];
  seattobecancled:any;
  reserveforuser:any;
  ngOnInit(): void {

    this.username= localStorage.getItem("username") || ""
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.reserveforuser=true;

if (localStorage.getItem("userType") =='1')
{
    this.reserveforuser=true;
}
else
{
  this.reserveforuser=false;
}
    });
    this.getMatchtHomeTeamsbyid();
    this.getMatchtawayTeamsbyid();
    this.getAllSeatsNumbers();
    this.getMatchtVenuebyid();
    this.getMatchtrefbyid();
    this.getMatchSeats();
    this.getMatchSeatsbyuser_id();
  }
  getMatchtHomeTeamsbyid()
  {
    this.matchService.getMatchtomeTeamsByid(this.id).subscribe(
      response => {
        this.matchhomeTeams = response[0].team_name ;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  getMatchtawayTeamsbyid()
  {
    this.matchService.getMatchtwayTeamsByid(this.id).subscribe(
      response => {
        this.matchawayTeams = response[0].team_name;
      },
      error => {
        console.log(error);
      });
  }
  getMatchtVenuebyid()
  {
    var venwidth;
    var venlength;

    this.matchService.getMatchtVenueByid(this.id).subscribe(
      response => {
        this.matchdet = response[0] ;
        venwidth=this.matchdet.width;
        venlength=this.matchdet.length;
        this.numberofseats = venwidth*venlength;

       for (let i = 1; i <= this.numberofseats; i++) {
          this.options.push(i.toString())
        }
      },
      error => {
        console.log(error);
      });
  }
  getMatchtrefbyid()
  {
    this.matchService.getMatchtmainrefByid(this.id).subscribe(
      response => {
        this.matchref = response[0] ;
      },
      error => {
        console.log(error);
      });
      this.matchService.getMatchtlineByid(this.id).subscribe(
        response => {
          this.matchref1 = response[0] ;
        },
        error => {
          console.log(error);
        });
        this.matchService.getMatchtline2Byid(this.id).subscribe(
          response => {
            this.matchref2 = response[0] ;
            console.log(this.matchref);
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
  

 getMatchSeats()
 {
  this.matchService.getMatchSeatsByid(this.id).subscribe(
    response => {
      this.seatsreserved = response;
      console.log("seeets");
      console.log(this.seatsreserved);
      for (let i = 0; i < this.seatsreserved.length; i++) {
        this.selected.push(this.seatsreserved[i].seat_id.toString())
        console.log(this.seatsreserved[i].seat_id)
      }
    },
    error => {
      console.log(error);
    });
 }
 getMatchSeatsbyuser_id()
 {
  this.matchService.getMatchSeatsByuserid(this.id,this.username).subscribe(
    response => {
      this.seatsofuser = response;
      console.log("seeets");
      console.log(this.seatsofuser);
    },
    error => {
      console.log(error);
    });
 }

  messages :any = [];
  selectednew:any =[];
  // check if the item are selected
  checked(item:any){
    if(this.selected.indexOf(item) != -1){
      return true;
    }
    else
    {
    return false;
    }
  }
  
  onChange(event:any, item:any){

    if(event.checked){
    this.selectednew.push(item);
    } else {
      this.selectednew.splice(this.selectednew.indexOf(item), 1)
    }
  }
  save(){
    if (this.selectednew.length ==0)
    {
      alert("You didn't select any seat!");
    }
    else
    {
    this.messages.push(this.selectednew);
    (<HTMLInputElement>document.getElementById("formm")).style.display = 'block';
    }
  }
  
  submit(form:any)
  {
    if ((<HTMLInputElement>document.getElementById("credit")).value =="" || (<HTMLInputElement>document.getElementById("pass")).value =="")
    {
       alert("Credit card number and pin number are both required");
    }
    else if ((<HTMLInputElement>document.getElementById("pass")).value =="")
    {
      alert("Credit card number and pin number are both required");
    }
    else if ((<HTMLInputElement>document.getElementById("credit")).value =="")
    {
      alert("Credit card number and pin number are both required");
    }
   
    else 
    {
    (<HTMLInputElement>document.getElementById("ticket")).style.display = 'block';
     console.log("dddddddddd");
     console.log(this.selectednew);
     for (let i = 0; i < this.selectednew.length; i++) {
       console.log(this.selectednew[i]);
      this.reserveSeat(this.id,parseInt(this.selectednew[i]),this.username)
    }
    this.getMatchSeatsbyuser_id();
    this.ticketnumber = this.selectednew[0].toString()+ this.id.toString();
    form.resetForm();
    }

  }
  reserveSeat(matchid:any,seatid:any,userid:any): void {
    this.matchService.reserveSeats(matchid,seatid,userid)
      .subscribe(
        response => {
          this.getMatchSeats();
          console.log("Seat reserved");
        },
        error => {
          console.log(error);
        });
  }
  Cancelreserv()
  {
    console.log("hhhhhhhhhhhhhhhhhhhhh");
    console.log(this.seattobecancled.seat_id);

    var seatid = this.seattobecancled.seat_id;
     var userid= "Sarah";
    this.matchService.cancelreserve(seatid,this.username)
    .subscribe(
      response => {
        this.getMatchSeats();
        for (let i = 0; i < this.selectednew.length; i++) {
          console.log(this.selectednew[i]);
         this.reserveSeat(this.id,parseInt(this.selectednew[i]),this.username)
       }
        console.log("Seat cancled");
        console.log(this.selectednew);
      },
      error => {
        console.log(error);
      });
    
    //form.resetForm();
  }
}
