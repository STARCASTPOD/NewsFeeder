// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('newsApp', ['ionic']);

app.controller('newsController', function($scope, $http){
  $scope.news=[];
  $http({
    method: "GET",
    url: "https://newsapi.org/v2/everything?sources=the-hindu&apiKey=9ceb006bc5784bc58ab0330809eb0d86"
  }).then(function(newsData){
    console.log(newsData);
    $scope.news=newsData.data.articles;
  })
  
  $scope.doRefresh = function() {
    $scope.news=[];
    $http({
      method: "GET",
      url: "https://newsapi.org/v2/everything?sources=the-hindu&apiKey=9ceb006bc5784bc58ab0330809eb0d86"
    }).then(function(newsData){
      console.log(newsData);
      $scope.news=newsData.data.articles;
    })
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
  };
});



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
