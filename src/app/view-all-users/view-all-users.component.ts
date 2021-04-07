import { Component, OnInit } from '@angular/core';
import { userData } from '../sign-up/userData';
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
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  // userObject : userData = {
  //   username: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  //   Date: '',
  //   gender: true,
  //   city: '',
  //   address: '',
  //   email: '',
  //   role: ''
  // }

  // elements: userData[] = [];
  elements : any = [];

  constructor(
    private matchService: MatchService
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  displayedColumns: string[] = ['username', 'name', 'address', 'email', 'deleteUser'];
  dataSource = this.elements;


  // public showIndex = -1;
  // public showIdRemoved = -1;

  // removeRow(i: number, id: number) {
  //   this.showIndex = i;
  //   // delete ELEMENT_DATA[i];
  //   ELEMENT_DATA.splice(i, 1);
  //   this.showIdRemoved = ELEMENT_DATA[i].id;

  //   for (let i = 0; i < ELEMENT_DATA.length; i++) {
  //     console.log (ELEMENT_DATA[i].id + '/n');
  //   }
  // }

  refresh() {
    // this.authService.getAuthenticatedUser().subscribe((res) => {
    //   this.user = res;
    //   this.teachDS = new LanguageDataSource(this.user.profile.languages.teach);
    //   this.changeDetectorRefs.detectChanges();
    // });
  }

  getUsers() {
    this.matchService.getAllUsers()
      .subscribe(
        res => {
          this.elements = res;
        },
        err => console.error(err)
      );
  }

  deleteUser(username: string) {
    this.matchService.deleteUser(username)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.error(err)
      )
  }

  // getLatesUsers()
  // {
  //   this.matchService.getAllUsers().subscribe(
  //     response => {
  //       this.elements = response;
  //       console.log(this.elements);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  // updateUsers(form:any,userObj:any){
  //   this.matchService.editAllUsers(formObj).subscribe(()=>
  //   {
  //     this.getLatesUsers();
  //   });
  // }

}
