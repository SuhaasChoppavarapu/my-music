import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.scss']
})
export class AddTrackComponent implements OnInit {

  artistId;
  artistname;
  title;
  url;
  summary;
  errorMsg;
  msg;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  //add track to databse
  addTrack(){

    if(this.title==null){
      this.errorMsg='title required';
      return;
    }
    else if(this.artistname==null){
      this.errorMsg='artistname required';
      return;
    }
    else if(this.url==null){
      this.errorMsg='url required';
      return;
    }
    else if(this.summary==null){
      this.errorMsg='summary required';
      return;
    }
    const newTrack={
      artistId: this.userService.currentUser._id,
      title: this.title,
      artistname: this.artistname,
      url:this.url,
      summary:this.summary,
    }
    console.log(newTrack);
    //calling user service function
    this.userService.addTrack(newTrack)
    .subscribe(data=>{
      this.msg=data;
      if(this.msg.msg!=='track added successfully')
      return;
      this.title="";
      this.artistname="";
      this.url="";
      this.summary="";
    });

    console.log(this.msg);
    
  }


}
