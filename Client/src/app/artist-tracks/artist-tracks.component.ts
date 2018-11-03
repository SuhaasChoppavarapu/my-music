import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-tracks',
  templateUrl: './artist-tracks.component.html',
  styleUrls: ['./artist-tracks.component.scss']
})
export class ArtistTracksComponent implements OnInit {

  tracks;
  msg;
  errorMsg;
  constructor(private musicService : MusicService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getArtistTracks();
  }

  //get tracks added by current artist
  getArtistTracks(){
    this.userService.getArtistTracks(this.userService.currentUser._id)
      .subscribe(data=>{
        this.tracks=data;
        console.log(this.tracks.length);
        if(this.tracks.length==0){
          this.errorMsg="No tracks added by you";
        }
        console.log(data);
      })

  }

  //delete tracks
  deleteTrack(title){
    console.log(title);
    this.userService.deleteTrack(title,this.userService.currentUser._id)
      .subscribe(data=>{
        console.log(data);
        this.msg=data.ok;
        this.getArtistTracks();
      })
  }

}
