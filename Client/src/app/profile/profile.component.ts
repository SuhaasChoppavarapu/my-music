import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username;
  role;
  password;
  email;
  errorMsg;
  msg;

  constructor(private musicService : MusicService, private userService: UserService, private router: Router) { 
    this.username=this.userService.currentUser.username;
    this.role=this.userService.currentUser.role;
    this.password=this.userService.currentUser.password;
    this.email=this.userService.currentUser.email;
  }

  ngOnInit() {
  }


  //updating current user profile
  updateProfile(){

    if(this.username==null){
      this.errorMsg='username required';
      return;
    }
    else if(this.password==null){
      this.errorMsg='password required';
      return;
    }
    else if(this.email==null){
      this.errorMsg='emai required';
      return;
    }
    else if(this.role==null){
      this.errorMsg='role required';
      return;
    }
    const userTobeUpdated={
      _id: this.userService.currentUser._id,
      username:this.username,
      password:this.password,
      role:this.role,
      email:this.email
    }
    this.userService.updateProfile(userTobeUpdated)
    .subscribe(data=>{
      this.msg=data.ok;
      console.log(this.msg);
      if(this.msg!=1){
        // this.router.navigate['/user/profile'];
        this.errorMsg="Unable to update profile";
        return;
      }
      else{
        this.router.navigate['/user/home'];
      }
      
    });
  }
}
