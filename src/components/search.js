angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  //make a controller
  controller: function($scope, youTube) {
    $scope.query = '';

    $scope.doSearch = function() {
      youTube.getRepo($scope.query, window.YOUTUBE_API_KEY, (response) => {
        $scope.$parent.vids = response;
        // console.log($scope.query, response, $scope.$parent.vids);
      });
    };
  }
});
