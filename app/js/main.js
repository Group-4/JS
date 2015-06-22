;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();

  // allUsers.fetch().done( function() {
  //   Backbone.history.start();
  // });

  app.mainRouter = new app.Routers.MainRouter({
    collectionUsers: allUsers,
    collectionPosts: allPosts,
    collectionGuesses: allGuesses
  });

  // home button event
  $('.wrapper').on('click', '.logoImage', function (e) {
    e.preventDefault();
    app.mainRouter.navigate('/main', { trigger: true });
  });



}());
