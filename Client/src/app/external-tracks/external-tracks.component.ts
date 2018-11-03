import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-external-tracks',
  templateUrl: './external-tracks.component.html',
  styleUrls: ['./external-tracks.component.scss']
})
export class ExternalTracksComponent implements OnInit {

  tracks
  constructor(private musicService : MusicService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getExternalTracks();
  }

  //getting tracks of all artists
  getExternalTracks(){
    this.userService.getExternalTracks()
      .subscribe(data=>{
        this.tracks=data;
      })
  }
}
