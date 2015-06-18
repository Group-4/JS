;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();

  allUsers.fetch().done( function() {

    app.mainRouter = new app.Routers.MainRouter({
      collection: allUsers
    });

    Backbone.history.start();

  });

$('.wrapper').on('click', '#logout', function (e) {
  e.preventDefault();
  Cookies.expire('access_token').get('access_token');
  app.mainRouter.navigate('', { trigger: true });
});

$('.wrapper').on('click', '#homeButton', function (e) {
  e.preventDefault();
  app.mainRouter.navigate('/main/:id', { trigger: true });
});



}());
