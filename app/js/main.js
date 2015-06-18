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
      console.log('yep logged in');
      app.mainRouter.navigate('/main/:id', { trigger: true });
      //ping to server to check if valid access token here
    } else {
      console.log('nope not logged in');
      app.mainRouter.navigate('', { trigger: true });
  }

  });

}());
