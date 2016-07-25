import {Page, NavController, NavParams} from 'ionic-angular';
 
@Page({
    templateUrl: 'build/pages/play-video/play-video.html',
 })
export class PlayVideoPage {
    public video;
 
    constructor(private nav: NavController, private navParams: NavParams) {
        //when we navigate from the homepage to this page
        //we send the clicked video, and here we get it
        //using the NavParams : ) now we have our video
        //we can show the details we want, we will need the title and videoId (id)
        this.video = navParams.get('video');
 
    }
}