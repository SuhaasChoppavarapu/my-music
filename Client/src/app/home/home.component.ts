import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Tracks } from '../models/tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tracks:Tracks[];
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.topTracks();
  }

  topTracks() {
    // MusicService.setTracks([]);
   // this.test = "Top Tracks";
    this.musicService.topTracks()
    .subscribe(tracks=>{
      //this.input=data.tracks.track;
      this.tracks=tracks;
    })
  }

  getImage(track) {
    return track.image[2]['#text'];
}

}
