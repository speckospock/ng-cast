angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($scope) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    $scope.vid = this.video;
    this.clickedOn = function(video) {
      $scope.vid = video;
    };
    $scope.$watch('vid', () => {
      this.video=$scope.vid;
    });
    // console.log(this);
  }
});
