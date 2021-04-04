import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMatchComponent} from './add-match/add-match.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { AddStaduimComponent } from './add-staduim/add-staduim.component';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewMatchDetailComponent } from './view-match-detail/view-match-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'addMatch', component: AddMatchComponent },
  {path: "match/:id", component: MatchComponent},
  {path: "addStaduim", component: AddStaduimComponent},
  {path: "registerGuest", component: RegisterGuestComponent,
  children: [
    { path: 'signIn', component: SignInComponent },
    { path: 'signUp', component: SignUpComponent }
  ]
    },
  { path: 'viewMatchDetail', component: ViewMatchDetailComponent}
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
