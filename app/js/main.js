;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();


  allUsers.fetch().done( function() {

    app.mainRouter = new app.Routers.MainRouter({
      collectionUsers: allUsers,
      collectionPosts: allPosts
    });

    // Backbone.history.start();

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
