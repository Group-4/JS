;(function (){

  'use strict';

  app.Views.Leaderboard = Backbone.View.extend({

    className: 'leaderboard',

    events: {
      'click #keepPlaying' : 'keepPlaying'
    },

    template: hbs.leaderboard,

    initialize: function(options){
      var args = options || {};
      this.singleID = args.singleID;
      this.collectionPosts = args.collectionPosts;
      this.collectionUsers = args.collectionUsers;
      this.render();

      $('.container').html(this.el);

    },

    render: function() {
      this.collectionPosts = new app.Collections.Posts();

      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
      this.$el.html(this.template(singlePost.toJSON()));

    }.bind(this));


      // var self = this;

      // var leaderboardResults = $.get(app.rootURL + '/leaderboard', function(data) {
      //   var leaderResponse = leaderboardResults.responseJSON;
      // }).done(function (data) {
      //   self.$el.html(self.template({ user: leaderboardResults.responseJSON }));
      // });



    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main', {trigger: true});
    },

    // leaderboardResults: function() {

    //   });

    // }

  });



}());
