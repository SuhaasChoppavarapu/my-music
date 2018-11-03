import { Injectable } from '@angular/core';
import {  Users } from '../models/users';
import { Http,Headers,Response} from '@angular/http';
import { RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  currentUser=null;
  constructor(private http: Http) { }

  //registering user
  registerUser(newUser){
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    console.log(newUser);
    return this.http.post('http://localhost:3000/user/register',newUser,{headers:headers})
    .map((res: Response)=>res.json());
  }

  //login user
  loginUser(username: string, password: string){
    return this.http.post('http://localhost:3000/login', { username: username, password: password })
            .map((res:Response) => this.currentUser=res.json());      
 }

 //update profile

 updateProfile(user){
   return this.http.put('http://localhost:3000/updateProfile',user)
        .map((res: Response)=> res.json());
 }

 //adding favorite tracks
 addFavoriteTrack(userId,trackId){
   return this.http.put('http://localhost:3000/addFavorite',{_id:  userId, trackId: trackId})
    .map((res: Response)=>res.json());
 }

 //get favorites
 getFavorites(id){
   return this.http.post('http://localhost:3000/getFavourites',{_id: id})
    .map((res: Response)=>res.json());
 }

 //add tracks
 addTrack(newTrack){
  return this.http.post('http://localhost:3000/addTrack',newTrack)
    .map((res: Response)=>res.json());
 }

 //getting artist tracks
 getArtistTracks(artistId){
  return this.http.post('http://localhost:3000/artistTracks',{artistId:artistId})
    .map((res: Response)=>res.json());
 }

 //deleting tracks
 deleteTrack(title,artistId){
  // var headers = new Headers();
  let body = {
    title: title,
    artistId: artistId
  };
  return this.http.post('http://localhost:3000/deleteTrack',body)
    .map((res: Response)=>res.json());
  }

  //getting external tracks
  getExternalTracks(){
    return this.http.get('http://localhost:3000/alltracks')
      .map((res: Response)=>res.json());
  }

}
