;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.UserModel,

    url: app.rootURL + '/users/register',

    comparator: 'score'


  });



}());
