import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-track-view',
  templateUrl: './track-view.component.html',
  styleUrls: ['./track-view.component.scss']
})
export class TrackViewComponent implements OnInit {

  track;
 data;
 errorMsg;
 love:boolean;

  constructor(private route: ActivatedRoute, private musicService: MusicService, private userService: UserService) {
    this.route.params.subscribe( params => this.getTackinfo(params['mbid']));
   }


  ngOnInit() {
  }

  //Getting track info from last-fm api
  getTackinfo(mbid){
    console.log(mbid);
    this.musicService.findTrackBymbidAPI(mbid)
      .subscribe(data=>{
        this.track=data.track;
      })
  }

  //fetching image 

  getImage(track) {
    console.log('hi');
    return track.album.image[2]['#text'];
  }

  //adding favourites
  addTofav(){
    if(!this.userService.currentUser){
      this.errorMsg="Please login to add to favourites";
      return;
    }
    else{
      this.userService.addFavoriteTrack(this.userService.currentUser._id,this.track.mbid)
        .subscribe(data=>{
          this.data=data;
          console.log(data._id);
          if(data._id===this.userService.currentUser._id){
            this.love=true;
          }
        })
    }
    console.log(this.track.mbid);
  }

}
