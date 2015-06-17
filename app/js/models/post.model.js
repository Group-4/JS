;(function (){

  'use strict';

  app.Models.PostModel = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      url: '',
      answer: '',
      userID: '',
      incorrect: 0,
      correct: 0
    }

  });


}());
