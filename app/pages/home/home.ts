import {Page, NavController} from 'ionic-angular';
import {Angular2YoutubeAppService} from "../../providers/angular-2-youtubeapp";
import {PlayVideoPage} from "../play-video/play-video";
 
@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [Angular2YoutubeAppService]
})
export class HomePage {
 
  public myVideos;
  public myQuery;
  constructor(private videosService: Angular2YoutubeAppService,
              private nav: NavController) {
  }
    // get video from youtube with the current query
    getVideos() {
            this.videosService.getVideos(this.myQuery).subscribe(
                data => {
                  let myData=data.json();
                  this.myVideos =  myData.items;
                  console.log( this.myVideos );
                },
                err => console.error(err),
                () => console.log('Youtube search completed')
            );
    }
 
    playVideo(video) {
        //go to play-video.html and send the video variable (the selected video)
        this.nav.push(PlayVideoPage, { video: video });
    }
 
}























/*import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
}
*/