import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Match } from '../app/models/match';
import { Matchh } from '../app/models/matchh';
import { userData } from './sign-up/userData';

const url = 'http://localhost:3000/matches';
const url2 = 'http://localhost:3000/staduims';
const url3 = 'http://localhost:3000/reservedSeats';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

/////
  API_URI = 'http://localhost:3000/api';
  MatchId = 0;

  getMatches() {
    console.log("e are hyereee");
    return this.http.get(`${this.API_URI}/matches`);
  }
  getMatchh(id: string) {
    return this.http.get(`${this.API_URI}/matches/${id}`);
  }
  deleteMatchh(id: string) {
    return this.http.delete(`${this.API_URI}/matches/${id}`);
  }
  saveMatch(match: Match) {
    return this.http.post(`${this.API_URI}/matches`, match);
  }
  updateMatch(id: number, updateMatch: Match): Observable<Match> {
    console.log("bn3mel edi");
    return this.http.put(`${this.API_URI}/matches/${id}`, updateMatch);
  }
/////



  constructor(private http: HttpClient) { }
  getAllMatches (): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchs`);
    }
  getMatch(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchs`);
  }
  addMatchRef(data:Matchh, matchid:any): Observable<any>
  {
    var url = "http://localhost:1337";
    let ref = {ref:data.MainReferee,
      id:matchid
        }
    return this.http.post(`${url}/matchEventrefe/:ref/:id`,ref);
  }
  addMatchline1(data:Matchh, matchid:any): Observable<any>
  {
    var url = "http://localhost:1337";
    let ref = {ref:data.line,
      id:matchid
        }
    return this.http.post(`${url}/matchEventrefe/:ref/:id`,ref);
  }  
  addMatchline2(data:Matchh, matchid:any): Observable<any>
  {
    console.log("ahoooo222");
    console.log(data);
    var url = "http://localhost:1337";
    console.log("rrrrr");
    let ref = {ref:data.line2,
      id:matchid
        }
    console.log(ref);
    return this.http.post(`${url}/matchEventrefe/:ref/:id`,ref);
  }
  addMatchTeams(data:Matchh, matchid:any): Observable<any>
  {
    var url = "http://localhost:1337";
    console.log("ttt");
    var stateA = "AwayTeam";
    var stateH = "HomeTeam";
    let teams = {id:matchid,
      Team1:data.AwayTeam,
      state1:stateA,
      Team2:data.HomeTeam,
      state2:stateH
        }
    console.log(teams);
    return this.http.post(`${url}/matchEventTeamsB/:id/:Team1/:state1/:Team2/:state2`,teams);

    }
  AddMatchVenue(data:Matchh): Observable<any>
  {
    var url = "http://localhost:1337";
    console.log("vennn");
        console.log(data);
    var dayy = (data.Date.substring(8,10));
    var monthh = (data.Date.substring(5,7));
    var monthhint = parseInt(data.Date.substring(5,7));
    monthhint = monthhint-1;
    if (monthhint.toString().length<2)
    {
      monthh = '0'+monthhint.toString();
    }
    var yearr = (data.Date.substring(0,4));
    var hourr = (data.Time.substring(0,2));
    var minutee = (data.Time.substring(3,5));
    let ven = {Venue:data.MatchVenue,
    day:dayy,
    month:monthh,
    year:yearr,
    hour:hourr,
    minut:minutee
    }
    console.log(monthh)
    return this.http.post(`${url}/matchEvent/:Venue/:day/:month/:year/:hour/:minut`,ven);
  }
 
  editMatchVenue(match:any, matchid:any) : Observable<any>{
    var url = "http://localhost:1337";
    console.log("ediiit venn");
    console.log(match);

    var dayy = (match.Date.substring(8,10));
    var monthh = (match.Date.substring(5,7));
    var yearr = (match.Date.substring(0,4));
    var hourr = (match.Time.substring(0,2));
    var minutee = (match.Time.substring(3,5));
    let ven = {
      id:matchid,
      Venue:match.MatchVenue,
    day:dayy,
    month:monthh,
    year:yearr,
    hour:hourr,
    minut:minutee
    }
    console.log(ven);

    return this.http.put(`${url}/updatematch/:id/:Venue/:day/:month/:year/:hour/:minut`,ven);

  }
  editMatchTeamsAway(match:any, matchid:any,oldteamid:any) : Observable<any>{
    var url = "http://localhost:1337";
    var stateA = "AwayTeam";
    let teams = {id:matchid,
      Team1:match.AwayTeam,
      state1:stateA,
       oldTeam:oldteamid
        }
    return this.http.put(`${url}/updatematchTeamsB/:id/:Team1/:state1/:oldTeam`,teams);
  }
  editMatchTeamsHome(match:any, matchid:any,oldteamid:any) : Observable<any>{
    var url = "http://localhost:1337";
    var stateH = "HomeTeam";
    let teams = {id:matchid,
      Team1:match.HomeTeam,
      state1:stateH,
      oldTeam:oldteamid
        }
    return this.http.put(`${url}/updatematchTeamsB/:id/:Team1/:state1/:oldTeam`,teams);
  }
  editmainrefe(match:any, matchid:any,oldrefid:any) : Observable<any>{
    var url = "http://localhost:1337";
    console.log("ediiit ref");
    console.log(match);
    let ref = {
      ref: match.MainReferee,
      id:matchid,
      oldref:oldrefid
        }
    console.log(ref);
    return this.http.put(`${url}/matchEventrefeB/:ref/:id/:oldref`,ref);
  }
  editline1refe(match:any, matchid:any,oldrefid:any) : Observable<any>{
    var url = "http://localhost:1337";
    console.log("ediiit ref");
    console.log(match);
    let ref = {
      ref: match.line,
      id:matchid,
      oldref:oldrefid
        }
    console.log(ref);
    return this.http.put(`${url}/matchEventrefeB/:ref/:id/:oldref`,ref);
  }
  editline2refe(match:any, matchid:any,oldrefid:any) : Observable<any>{
    var url = "http://localhost:1337";
    console.log("ediiit ref");
    console.log(match);
    let ref = {
      ref: match.line2,
      id:matchid,
      oldref:oldrefid
        }
    console.log(ref);
    return this.http.put(`${url}/matchEventrefeB/:ref/:id/:oldref`,ref);
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
  
  getSeats(matchid:any):Observable<any>{
    // return this.http.get(`${url}/${id}`);
     return this.http.get (url3);
   }
///////////
   getmatchTeams():Observable<any>{
     var url=  "http://localhost:1337";
     return this.http.get (`${url}/getteam`);
   }
   getVenues():Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getvenues`);
  }
  AddStaduim (data:any): Observable<any>{
    var url=  "http://localhost:1337";
    console.log("ediiit ref");
    console.log(data);
    let stad = {
      loc: data.location,
      shape:data.shape,
      width:data.width,
      length:data.length
        }
    console.log(stad);
    return this.http.post(`${url}/addStadium/:loc/:shape/:width/:length`,stad);
  }
  getmainreferee():Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmainref`);
  }
  getlinesref():Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getlines`);
  }
  getlinesref2():Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getlines2`);
  }
  getMatchtomeTeamsByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchteamshome/${matchid}`);
  }
  getMatchtwayTeamsByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchteamsaway/${matchid}`);
  }
  getMatchtVenueByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchVenue/${matchid}`);
  }
  getMatchtmainrefByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchrefe/${matchid}`);
  }
  getMatchtlineByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchline1/${matchid}`);
  }
  getMatchtline2Byid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmatchline2/${matchid}`);
  }
  getMatchSeatsByid(matchid:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmachSeat/${matchid}`);
  }
  getMatchSeatsByuserid(matchid:any, user_id:any):Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getmachSeatbyuser/${matchid}/${user_id}`);
  }
  reserveSeats(matchid:any,seatid:any,userid:any):Observable<any>{
    var url=  "http://localhost:1337";
    console.log("hnaaaa");
    let seat = {
      match_id: matchid,
      seat_id:seatid,
      user_id:userid
        }
        console.log("sssss1111");
        console.log(seat);
    return this.http.post(`${url}/reserveticket/:match_id/:seat_id/:user_id`,seat);
  }
  cancelreserve(seatid:any,userid:any)
  {
    var url=  "http://localhost:1337";
        console.log("dddddd");
    return this.http.delete(`${url}/deletereservation/${seatid}/${userid}`);
  }


  ////////////////////////// data needed for login and signup ///////////////////////////// 
  
  submitLogin(data:userData): Observable<any>
  {
    console.log("looooooog");

    var url = "http://localhost:1337";
    let userInfo = {
      user_name: data.username,
      ///
      pass: data.userPassword
    }
    console.log(userInfo);
    return this.http.post(`${url}/getuser/:user_name/:pass`,userInfo);
  }

  submitSignup(data:userData): Observable<any>
  {
    var url = "http://localhost:1337";
    console.log("uuuuupppppppppp");
    console.log(data);

    var dayy = (data.Date.substring(8,10));
    var monthh = (data.Date.substring(5,7));
    var monthhint = parseInt(data.Date.substring(5,7));
    monthhint = monthhint-1;
    if (monthhint.toString().length<2)
    {
      monthh = '0'+monthhint.toString();
    }
    var role;
    if (data.role =="Fan")
    {
      role=0;
    }
    if (data.role =="Manager")
    {
      role=3;
    }

    var yearr = (data.Date.substring(0,4));
    let userInfo = {
      user_name: data.username,
      user_type: role,
      first_name: data.firstName,
      last_name: data.lastName,
      pass: data.userPassword,
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

  ///////////////////// for admin /////////////////////////

  deleteUser (userInfo :any): Observable<any>
  {
    var url=  "http://localhost:1337";
    console.log("dddd");

    console.log(userInfo)
    //return this.http.delete (`${url}/${id}`);
   // return this.http.delete (url + '/deleteuser/:id'+userInfo);
    return this.http.delete(`${url}/deleteuser/${userInfo}`);
  }

  getAllUsers (): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getusers`);
  }

  getApproveList(): Observable<any>{
    var url=  "http://localhost:1337";
    return this.http.get (`${url}/getnonuser`);
  }

  approveUser(username:any): Observable<any>
  {
    var url = "http://localhost:1337";
    console.log("pppppppppp");
    console.log(username);
    let usernamee = {
      user_name: username
        }
    //return this.http.put(`${url}/approve/:user_name`,username);
    return this.http.put(`${url}/approve/:user_name`,usernamee);
  }

  ///////////////////// profile //////////////////////////////
  
  getUserType(username:any): Observable<any>{
    var url=  "http://localhost:1337";
    console.log("wwwwwwwwwww");
    console.log(username);
    return this.http.get (`${url}/getusertype/${username}`);

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
      pass: data.userPassword,
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





  logoutUser() {
    localStorage.removeItem('token')
  }

  loggedIn() {
    // returns if a token exists, i.e. if there is a user logged in
    return !!localStorage.getItem('token')
  }

}
