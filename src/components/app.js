angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope, $http, youTube) {
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

      youTube.getRepo("Kurzgesagt", window.YOUTUBE_API_KEY, (response) => {
        $scope.vids = response;
      });

      console.log($http);
    }
  });
