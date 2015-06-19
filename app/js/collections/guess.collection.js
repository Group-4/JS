;(function (){

  'use strict';

  app.Collections.Guesses = Backbone.Collection.extend({

    model: app.Models.GuessModel,

    url: app.rootURL + '/guesses'


  });



}());
