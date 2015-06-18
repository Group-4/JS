;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;
    },

    routes: {

      '' : 'login',
      'main/:id' : 'mainPage',
      'single/:id' : 'singlePost',
      'leaderboard' : 'leaderboardPage',
      'newpost' : 'newPost'

    },

    newPost: function () {
      new app.Views.NewPost();
    },

    login: function() {
      new app.Views.Login({
        collection: this.collection
      });
    },

    mainPage: function(id) {
      new app.Views.Main({

        collection: this.collection

      });
    },

    leaderboardPage: function() {
      console.log('leaderboardPage');
      new app.Views.Leaderboard({
        //collection: this.collection
      });
    },

    singlePost: function (id) {
      new app.Views.Single({
        singleID: id
      });
    }


  });


}());
