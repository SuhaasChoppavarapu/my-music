import { Component, OnInit } from '@angular/core';
import {  Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users:Users[];
  user:Users;
  firstname;
  lastname;
  username;
  role;
  password;
  email;
  msg;
  errorMsg;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  //registering user
  registerUser(){

    if(this.username==null){
      this.errorMsg='username required';
      return;
    }
    else if(this.password==null){
      this.errorMsg='password required';
      return;
    }
    else if(this.firstname==null){
      this.errorMsg='firstname required';
      return;
    }
    else if(this.lastname==null){
      this.errorMsg='lastname required';
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
    const newUser={
      firstname: this.firstname,
      lastname: this.lastname,
      username:this.username,
      password:this.password,
      role:this.role,
      email:this.email
    }
    console.log(newUser);
    this.userService.registerUser(newUser)
    .subscribe(data=>{
      this.msg=data;
      if(this.msg.msg!=='user created successfully')
      return;
      this.firstname="";
      this.lastname="";
      this.username="";
      this.role="";
      this.password="";
      this.email="";
    });

    console.log(this.msg);
    
  }

}
