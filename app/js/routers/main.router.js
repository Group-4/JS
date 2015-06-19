;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
    },

    routes: {

      '' : 'login',
      'main' : 'mainPage',
      'single/:id' : 'singlePost',
      'leaderboard/:id' : 'leaderboardPage',
      'newpost' : 'newPost'

    },

    newPost: function () {
      new app.Views.NewPost();
    },

    login: function() {
      new app.Views.Login({
        collectionUsers: this.collectionUsers
      });
    },

    mainPage: function() {
      console.log(this);
      new app.Views.Main({
        collectionUsers: this.collectionUsers,
        collectionPosts: this.collectionPosts
      });
    },

    leaderboardPage: function(id) {
      new app.Views.Leaderboard({
        singleID: id
      });
    },

    singlePost: function (id) {
      new app.Views.Single({
        singleID: id
      });
    }


  });


}());
