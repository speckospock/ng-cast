angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  controller: function() {
    // console.log(this);
    this.somefunc = () => {
      //console.log(this.video);
      this.clickedOn(this.video);
    };
  },
  bindings: {
    video: '<',
    clickedOn: '<',
  }
});
