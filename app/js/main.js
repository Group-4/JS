;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();

  allUsers.fetch().done( function() {


    app.mainRouter = new app.Routers.MainRouter({
      collection: allUsers
    });

    Backbone.history.start();


  app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
  if (app.isLoggedIn) {
    app.mainRouter.navigate('/single', {trigger: true});

  } else {
    app.mainRouter.navigate('', {trigger: true});
  }

  });

}());
