;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

      app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
      console.log(Cookies.get('access_token'), app.isLoggedIn)
      console.log('fffffff', app.isLoggedIn);

        if (app.isLoggedIn) {

        $.get(app.rootURL + '/users/current_user').done ( function (data) {
          app.LoggedInUser = data;
          Backbone.history.start();
          app.mainRouter.navigate('/main', {trigger: true});
          })

        } else {
          Backbone.history.start();
          app.mainRouter.navigate('', {trigger: true});
        }

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
      new app.Views.Main({
        collectionPosts: this.collectionPosts,
        collectionUsers: this.collectionUsers,
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
