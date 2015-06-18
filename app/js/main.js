;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();

  // allUsers.fetch().done( function() {

  //   console.log(allUsers);

    app.mainRouter = new app.Routers.MainRouter({
      collection: allUsers
    });

    Backbone.history.start();

  // });



}());
