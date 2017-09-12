angular.module('video-player')
.service('youTube', function($http){

  this.getRepo = (search="puppies", key=window.YOUTUBE_API_KEY) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: search,
        part: 'snippet',
        maxResults: 5,
        key: key,
        videoEmbeddable: true,
        type: 'video',
      }
    }).then((data) => { console.log(data); });
  };
});
