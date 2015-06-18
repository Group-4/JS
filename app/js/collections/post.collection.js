;(function (){

  'use strict';

  app.Collections.Posts = Backbone.Collection.extend({

    model: app.Models.PostModel,

    comparator: 'incorrect',

    url: app.rootURL + /posts


  });



}());
