angular.module('video-player', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});

require('./components/app.js');
require('./components/search.js');
require('./components/videoList.js');
require('./components/videoListEntry.js');
require('./components/videoPlayer.js');
require('./config/youtube.js');
require('./services/youTube.js');
require('./data/exampleVideoData.js');
