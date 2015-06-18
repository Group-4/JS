;(function (){

  'use strict';

  app.Models.UserModel = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {

      username: '',
      password: '',
      score: '',
      email: '',
      accessToken: ''
    }

  });





}());
