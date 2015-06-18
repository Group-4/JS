;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();

  allUsers.fetch().done( function() {


    app.mainRouter = new app.Routers.MainRouter({
      collection: allUsers
    });

    Backbone.history.start();

  });

$('.wrapper').on('click', '#logout', function () {
  Cookies.expire('access_token').get('access_token');
  app.mainRouter.navigate('', { trigger: true });
});



}());
