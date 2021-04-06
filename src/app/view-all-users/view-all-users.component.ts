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
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {
  teachDS: any;

  user: any;

  constructor(
    // private authService: AuthService, private dialog: MatDialog,
    // private changeDetectorRefs: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.refresh();
  }

  displayedColumns: string[] = ['id', 'username', 'name', 'address', 'email', 'deleteUser'];
  dataSource = ELEMENT_DATA;

  public showIndex = -1;
  public showIdRemoved = -1;

  removeRow(i: number, id: number) {
    this.showIndex = i;
    // delete ELEMENT_DATA[i];
    ELEMENT_DATA.splice(i, 1);
    this.showIdRemoved = ELEMENT_DATA[i].id;

    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      console.log (ELEMENT_DATA[i].id + '/n');
    }
  }

  refresh() {
    // this.authService.getAuthenticatedUser().subscribe((res) => {
    //   this.user = res;
    //   this.teachDS = new LanguageDataSource(this.user.profile.languages.teach);
    //   this.changeDetectorRefs.detectChanges();
    // });
  }

}
