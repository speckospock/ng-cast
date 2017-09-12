angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope, $http) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      $scope.vid = this.video;
      $scope.vids = this.videos;
      this.clickedOn = function(video) {
        $scope.vid = video;
      };
      $scope.$watch('vid', () => {
        this.video=$scope.vid;
      });
      $scope.$watch('vids', () => {
        this.videos=$scope.vids;
        this.video=$scope.vids[0];
      });

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'Kurzgesagt',
          part: 'snippet',
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video',
        },
      }).then((response) => {
        console.log(response);
        $scope.vids = response.data.items;
      }, () => {
        console.log('hi');
      });
      console.log($http);
    }
  });
