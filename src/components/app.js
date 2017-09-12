angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.clickedOn = function(video) {
      this.video = video;
      console.log(this);
    };
    // console.log(this);
  }
});
