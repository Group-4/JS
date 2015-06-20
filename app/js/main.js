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

// $('.wrapper').on('click', '#logout', function (e) {
//   e.preventDefault();

//   var cookie = Cookies.get('access-token');
//   console.log(cookie);
//   Cookies.expire('Access-Token', undefined);
//   app.mainRouter.navigate('', { trigger: true });
// });

$('.wrapper').on('click', '.logo', function (e) {
  e.preventDefault();
  app.mainRouter.navigate('/main', { trigger: true });
});



}());
