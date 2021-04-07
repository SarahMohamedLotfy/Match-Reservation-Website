import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from './match.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor (private _service: MatchService, private _router: Router) {}

  canActivate() : boolean {
    if (this._service.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['./registerGuest/signIn'])
      return false
    }
  }
  
}
