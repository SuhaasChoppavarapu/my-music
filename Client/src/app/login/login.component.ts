import { Component, OnInit } from '@angular/core';
import {  Users } from '../models/users';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  user;
  errorMsg;
 
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  //login methods
  login(){
    if(this.username==null){
      this.errorMsg="Username required";
      return;
    }
    if(this.password==null){
      this.errorMsg="password required";
      return;
    }
    this.userService.loginUser(this.username,this.password)
    .subscribe(user=>{
      // console.log(user);
      this.user=user;
      // console.log(this.user);
      // this.userService.currentUser=user;
      if(!this.user){
        this.errorMsg='Invalid username or Password';
      }
      //navigating based on role
      else if(this.user.role=='USER'){
        this.router.navigate(['/user/home']);
      }
      else if(this.user.role=='ARTIST'){
        this.router.navigate(['/artist/home']);
      }
    })
 
    
  }
}
