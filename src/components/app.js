angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function($scope, $http) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    $scope.vid = this.video;
    this.clickedOn = function(video) {
      $scope.vid = video;
    };
    $scope.$watch('vid', () => {
      this.video=$scope.vid;
    });

    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: 'puppies',
        part: 'snippet',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        type: 'video',
      },
    }).then((data) => {
      console.log(data);
      $scope.vids = data.items;
    }, () => {
      console.log('hi');
    });
    console.log($http);
  }
});
