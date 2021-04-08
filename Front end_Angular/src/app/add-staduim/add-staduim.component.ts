import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';

@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css']
})
export class AddStaduimComponent implements OnInit {

  
  allStaduims : any;
  staduimObject={
    location:'',
    shape:'',
    width:0,
    length:0,
    id:0,
  }
  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.getSatduims();
  }
  addSatduim(form:any,formObj:any): void {
    this.matchService.AddStaduim(formObj)
      .subscribe(
        response => {
          this.getSatduims();
          console.log("Staduim is added");
        },
        error => {
          console.log(error);
        });

      form.resetForm();
  }
  getSatduims()
  {
    this.matchService.getVenues().subscribe(
      response => {
        this.allStaduims = response;
      },
      error => {
        console.log(error);
      });
  }
  
}
