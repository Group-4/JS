;(function (){

  'use strict';

  app.Models.PostModel = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      image_url: '',
      answer: '',
      userID: '',
      incorrect: 0,
      correct: 0
    }

  });


}());
