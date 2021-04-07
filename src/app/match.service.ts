import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { userData } from './sign-up/userData';

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

  ////////////////////////// data needed for login and signup ///////////////////////////// 
  
  submitLogin(data:userData): Observable<any>
  {
    var url = "http://localhost:1337";
    let userInfo = {
      user_name: data.username,
      pass: data.password
    }
    console.log(userInfo);
    return this.http.post(`${url}/getuser/:user_name/:pass`,userInfo);
  }

  submitSignup(data:userData): Observable<any>
  {
    var url = "http://localhost:1337";
    var dayy = (data.Date.substring(8,10));
    var monthh = (data.Date.substring(5,7));
    var monthhint = parseInt(data.Date.substring(5,7));
    monthhint = monthhint-1;
    if (monthhint.toString().length<2)
    {
      monthh = '0'+monthhint.toString();
    }
    var yearr = (data.Date.substring(0,4));
    let userInfo = {
      user_name: data.username,
      user_type: data.role,
      first_name: data.firstName,
      last_name: data.lastName,
      pass: data.password,
      mail: data.email,
      gender: data.gender,
      address: data.address,
      city: data.city,
      day:dayy,
      month:monthh,
      year:yearr,
    }
    console.log(userInfo);
    return this.http.post(`${url}/registeruser/:user_name/:user_type/:first_name/:last_name/:pass/:mail/:gender/:address/:city/:day/:month/:year`,userInfo);
  }

  loggedIn() {
    // returns if a token exists, i.e. if there is a user logged in
    return !!localStorage.getItem('token')
  }

  ///////////////////// for admin /////////////////////////

  deleteUser (userInfo :any): Observable<any>
  {
    //return this.http.delete (`${url}/${id}`);
    return this.http.delete (url + '/deleteuser/:id'+userInfo.id);
  }

  getAllUsers (): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getusers`);
  }

  getApproveList(): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getnonuser`);
  }

  approveUser(username:string): Observable<any>
  {
    var url = "http://localhost:1337";
    console.log(username);
    return this.http.put(`${url}/approve/:user_name`,username);
  }

  ///////////////////// profile //////////////////////////////
  
  getUserType(): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getusertype/:username`);
  }

  editUser(data:userData): Observable<any>{     ////////////////////////////
    var url=  "http://localhost:1337";
    var url = "http://localhost:1337";
    var dayy = (data.Date.substring(8,10));
    var monthh = (data.Date.substring(5,7));
    var monthhint = parseInt(data.Date.substring(5,7));
    monthhint = monthhint-1;
    if (monthhint.toString().length<2)
    {
      monthh = '0'+monthhint.toString();
    }
    var yearr = (data.Date.substring(0,4));
    let userInfo = {
      first_name: data.firstName,
      last_name: data.lastName,
      pass: data.password,
      gender: data.gender,
      address: data.address,
      city: data.city,
      day:dayy,
      month:monthh,
      year:yearr,
      user_name: data.username
    }
    console.log(userInfo);
    return this.http.put(`${url}/updateuser/:first_name/:last_name/:pass/:gender/:address/:city/:day/:month/:year/:user_name`, userInfo);
  }



}
