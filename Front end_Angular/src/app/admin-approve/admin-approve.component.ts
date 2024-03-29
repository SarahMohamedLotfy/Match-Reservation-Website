import { Component, OnInit } from '@angular/core';
import {MatchService} from 'src/app/match.service';


// export interface PeriodicElement {
//   id: number;
//   username: string;
//   name: string;
//   address: string;
//   email: string;
// }

// var ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
//   { id: 2, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
//   { id: 3, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
//   { id: 4, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
//   { id: 5, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" }
// ]


@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

  elements: any[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.getApproveList();
  }
  

  displayedColumns: string[] = ['username', 'name', 'address', 'email', 'approve/disapprove'];
  dataSource = this.elements;

  public showIndex = -1;
  public showIdRemoved = -1;

  // removeRow(i: number, id: number) {
  //   this.showIndex = i;
  //   delete ELEMENT_DATA[i];
  //   this.showIdRemoved = ELEMENT_DATA.length;
  // }

  getApproveList() {
    this.matchService.getApproveList()
      .subscribe(
        res => {
          this.elements = res;
        },
        err => console.error(err)
      );
  }

  approveUser(username: string) {
    this.matchService.approveUser(username)
      .subscribe(
        res => {
          console.log(res);
          this.getApproveList();
        },
        err => console.error(err)
      )
  }

  deleteUser(username: string) {
    this.matchService.deleteUser(username)
      .subscribe(
        res => {
          console.log(res);
          this.getApproveList();
        },
        err => console.error(err)
      )
  }

}
