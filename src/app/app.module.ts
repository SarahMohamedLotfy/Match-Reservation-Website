import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMatchComponent } from './add-match/add-match.component';
import {MatchService} from './match.service';
import { FormsModule } from '@angular/forms';
import { MatchComponent } from './match/match.component';
import { HomeComponent } from './home/home.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddStaduimComponent } from './add-staduim/add-staduim.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewMatchDetailComponent } from './view-match-detail/view-match-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AdminApproveComponent } from './admin-approve/admin-approve.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AuthGuard } from './auth.guard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    MatchComponent,
    HomeComponent,
    AddStaduimComponent,
    RegisterGuestComponent,
    SignUpComponent,
    SignInComponent,
    ViewMatchDetailComponent,
    AdminApproveComponent,
    ViewAllUsersComponent,
    ViewProfileComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatRadioModule
    ],
  exports: [
    MatDatepickerModule
  ],
  providers: [
    MatchService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
