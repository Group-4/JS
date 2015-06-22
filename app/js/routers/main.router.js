;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

      // check if user has an open session and navigate to correct page
      app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
        if (app.isLoggedIn) {
          $.get(app.rootURL + '/users/current_user').done ( function (data) {
            app.LoggedInUser = data;
            Backbone.history.start();
            app.mainRouter.navigate('/main', {trigger: true});
          })

        } else {
          Backbone.history.start();
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
        collectionUserPosts: this.collectionUserPosts
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
