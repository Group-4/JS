;(function (){

  'use strict';

  app.Models.GuessModel = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      userID: '',
      postID: '',
      guessAnswer: '',
      points: 0
    }

  });



}());
