import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the Angular2Youtubeapp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Angular2YoutubeAppService {


  constructor(private http: Http) {

  }

  getVideos(myQuery) {
    let stringParamsYoutube = "?key=YourKey&type=video&q=" + myQuery + "&part=id,snippet";

    let repos = this.http.get(`https://www.googleapis.com/youtube/v3/search` + stringParamsYoutube);

    console.log(repos);

    return repos;


  }
}