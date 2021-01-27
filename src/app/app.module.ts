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

@NgModule({
  declarations: [
    AppComponent,
    AddMatchComponent,
    MatchComponent,
    HomeComponent,
    AddStaduimComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    BrowserAnimationsModule,
    NgbModule
    ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
