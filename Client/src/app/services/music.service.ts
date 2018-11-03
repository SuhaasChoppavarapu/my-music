import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import { Http,Headers,Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

  key = /*process.env.API_KEY ||*/ "312d55910c8d5b7986d73776be226ade";
  secret = /*process.env.API_SECRET// ||*/ "3f103d216930f1ad01f47424dbbde889";
  urlBase = "http://ws.audioscrobbler.com/2.0/?method=METHOD&PARAMS&api_key=API_KEY&format=json";

  constructor(private http: Http) { }

  //getting top tacks from api
  topTracks() {
    var urlBase = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=API_KEY&format=json";
    var url = urlBase.replace("API_KEY", this.key);
    return this.http.get(url)
     .map((res: Response) => res.json().tracks.track);
    }

    //searching tracks from api
    searchTracks(searchTerm, page) {
      var method = "track.search";
      var params = "track="+searchTerm+"&page="+page;
      var url = this.urlBase
          .replace("API_KEY", this.key)
          .replace("METHOD", method)
          .replace("PARAMS", params);
      return this.http.get(url)
        .map((res: Response)=>res.json().results.trackmatches.track);
    }

    //getting track details by id

    findTrackBymbidAPI(trackId) {
      var method = "track.getInfo";
      var params = "mbid="+trackId;
      var url = this.urlBase
          .replace("API_KEY", this.key)
          .replace("METHOD", method)
          .replace("PARAMS", params);
      return this.http.get(url)
        .map((res: Response)=>res.json());
    }
}
