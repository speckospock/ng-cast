angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  controller: function($scope) {
    console.log($scope.vid);
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
