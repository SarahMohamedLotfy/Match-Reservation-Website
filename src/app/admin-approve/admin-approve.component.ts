import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: number;
  username: string;
  name: string;
  address: string;
  email: string;
}

var ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  { id: 2, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  { id: 3, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  { id: 4, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  { id: 5, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" }
]


@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.component.html',
  styleUrls: ['./admin-approve.component.css']
})
export class AdminApproveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // ELEMENT_DATA = [
  //   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  //   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  //   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  //   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" },
  //   { id: 1, username: "username", name: "Jack Reacher", address: "nowhere", email: "jack.reacher@example.com" }
  // ]

  displayedColumns: string[] = ['id', 'username', 'name', 'address', 'email', 'approve/disapprove'];
  dataSource = ELEMENT_DATA;

  public showIndex = -1;
  public showIdRemoved = -1;

  removeRow(i: number, id: number) {
    this.showIndex = i;
    delete ELEMENT_DATA[i];
    this.showIdRemoved = ELEMENT_DATA.length;
  }

}
