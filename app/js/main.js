;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();

  console.log('fetching users');

  allUsers.fetch().done( function() {

    console.log('fetched users');

    // Backbone.history.start();

  });

  app.mainRouter = new app.Routers.MainRouter({
    collectionUsers: allUsers,
    collectionPosts: allPosts,
    collectionGuesses: allGuesses
  });

$('.wrapper').on('click', '#logout', function (e) {
  e.preventDefault();
  Cookies.expire('access_token').get('access_token');
  app.mainRouter.navigate('', { trigger: true });
});

$('.wrapper').on('click', '#homeButton', function (e) {
  e.preventDefault();
  app.mainRouter.navigate('/main', { trigger: true });
});



}());
