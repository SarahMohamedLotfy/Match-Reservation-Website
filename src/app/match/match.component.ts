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
  match:any;
  seats:any;
  id:any;
  numberofseats=20;
  vacantseats :Array<number>=[];
  ticketnumber=3;
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
  

 
  
  options = ['1', '2', '3', '4', '5']
  selected = ["1", "2", "5"]
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
  
  onChange(checked:boolean, item:any){

    if(checked){
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

    form.resetForm();
    }

  }
 
 
}
