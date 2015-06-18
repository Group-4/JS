;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {
      var args = options || {};
      this.collection = args.collection;

    },

    routes: {

      '' : 'login',
      'user/post/:id' : 'singlePost'

    },

    login: function() {
      new app.Views.Login({
        collection: this.collection
      });
    },

    singlePost: function () {
      new app.Views.Single({
        singleID: id,
        collection: this.collection
      });
    }

  });


}());
