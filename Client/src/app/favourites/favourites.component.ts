import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  mbids=[];
  tracks=[];
  constructor(private musicService : MusicService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getFavourites();
  }

  getFavourites(){
    this.userService.getFavorites(this.userService.currentUser._id)
      .subscribe(data=>{
        this.mbids=data;
        console.log(this.mbids);
        this.mbids.forEach(function(mbid){
          console.log(mbid);
          this.musicService.findTrackBymbidAPI(mbid)
          .subscribe(data=>{
            this.tracks.push(data.track);
          })
          // console.log(this.tracks);
        })
      });
  }
}
