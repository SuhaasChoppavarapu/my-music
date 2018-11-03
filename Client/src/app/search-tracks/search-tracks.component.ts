import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.scss']
})
export class SearchTracksComponent implements OnInit {

  searchTerm;
  tracks: Tracks[];

  constructor(private musicService: MusicService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.searchTracks((params['searchKey'])));
   }

  ngOnInit() {
  }

  searchTracksfromhere(){
    this.musicService.searchTracks(this.searchTerm,1)
    .subscribe(tracks=>{
      //this.input=data.tracks.track;
      this.tracks=tracks;});
   }

   searchTracks(searchKey){
    this.musicService.searchTracks(searchKey,1)
    .subscribe(tracks=>{
      //this.input=data.tracks.track;
      this.tracks=tracks;});
   }

   getImage(track) {
    console.log(this.tracks.length);
    return track.image[2]['#text'];
   
   }
}
