import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddMatchComponent} from './add-match/add-match.component';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { AddStaduimComponent } from './add-staduim/add-staduim.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'addMatch', component: AddMatchComponent },
  {path: "match/:id", component: MatchComponent},
  {path: "addStaduim", component: AddStaduimComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
