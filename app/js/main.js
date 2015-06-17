;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();

  allUsers.fetch().done( function() {

    new app.Routers.MainRouter({
      collection: allUsers
    });

    Backbone.history.start();

  });



}());
