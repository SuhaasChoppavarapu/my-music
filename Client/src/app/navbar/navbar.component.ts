import { Component, OnInit, Input } from '@angular/core';
import {  SearchTracksComponent } from '../search-tracks/search-tracks.component';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchTerm;
 currUser;
 constructor(private musicService : MusicService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  //logout method where global user is set to null
  logout(){
    this.userService.currentUser=null;
    this.router.navigate(['/home']);
  }
}
