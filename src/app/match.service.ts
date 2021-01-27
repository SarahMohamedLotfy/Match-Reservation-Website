import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const url = 'http://localhost:3000/matches';
const url2 = 'http://localhost:3000/staduims';
const url3 = 'http://localhost:3000/reservedSeats';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  getAllMatches (): Observable<any>{
    return this.http.get(url);
  }
  getMatch(matchid:any):Observable<any>{
   // return this.http.get(`${url}/${id}`);
    return this.http.get (url +'/'+matchid);
  }
  AddMatch (data:any): Observable<any>{
    return this.http.post(url,data);
  }
  editMatch(match:any) : Observable<any>{
    //return this.http.put (`${url}/${id}`,data);
    return this.http.put (url +'/'+match.id, match);

  }
  deleteMatch (match :any): Observable<any>
  {
    //return this.http.delete (`${url}/${id}`);
    return this.http.delete (url + '/'+match.id);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(url);
  }


  //Staduim
  getAllStaduim (): Observable<any>{
    return this.http.get(url2);
  }
  getStaduim(staduimid:any):Observable<any>{
   // return this.http.get(`${url}/${id}`);
    return this.http.get (url2 +'/'+staduimid);
  }
  AddStaduim (data:any): Observable<any>{
    return this.http.post(url2,data);
  }
  getSeats(matchid:any):Observable<any>{
    // return this.http.get(`${url}/${id}`);
     return this.http.get (url3);
   }

}
