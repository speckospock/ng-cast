angular.module('video-player')
.service('youTube', function($http) {

  this.getRepo = (search = 'puppies', key = window.YOUTUBE_API_KEY, callback = _.identity) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: search,
        part: 'snippet',
        maxResults: 5,
        key: key,
        videoEmbeddable: true,
        type: 'video',
      }
    }).then((result) => {
      callback(result.data.items);
    }, () => {
      console.log('Request FAILURE');
    });
  };
});
