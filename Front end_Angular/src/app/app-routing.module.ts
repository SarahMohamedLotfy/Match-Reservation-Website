import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMatchComponent} from './add-match/add-match.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { AddStaduimComponent } from './add-staduim/add-staduim.component';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchesuserComponent } from './matchesuser/matchesuser.component';
import { ViewMatchDetailComponent } from './view-match-detail/view-match-detail.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { AdminApproveComponent } from './admin-approve/admin-approve.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'addMatch', component: AddMatchComponent },
  {path: "match/:id", component: MatchComponent},
  {path: "addStaduim", component: AddStaduimComponent},
  {
    path: '',
    redirectTo: '/matches',
    pathMatch: 'full'
  },
  {
    path: 'matches/edit/:id',
    component: MatchesuserComponent
  },
  {
    path: 'matchesmanager',
    component: MatchesComponent
  },
  {
    path: 'matches',
    component: MatchesuserComponent
  },

    {path: "registerGuest", component: RegisterGuestComponent,
    children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent }
    ]
      },
    { path: 'viewMatchDetail', component: ViewMatchDetailComponent},
    { path: 'viewRequests', component: AdminApproveComponent},
    { path: 'viewAllUsers', component: ViewAllUsersComponent},
    { path: 'viewProfile', component: ViewProfileComponent}
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export class routingComponents = [HomeComponent,
//                                   AddMatchComponent,
//                                   MatchComponent,
//                                   AddStaduimComponent,
//                                   RegisterGuestComponent,
//                                   SignUpComponent,
//                                   SignInComponent]
