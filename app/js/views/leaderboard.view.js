;(function (){

  'use strict';

  app.Views.Leaderboard = Backbone.View.extend({

    className: 'leaderboard',

    events: {
      'click #keepPlaying' : 'keepPlaying'
    },

    template: hbs.leaderboard,
    templateList: hbs.list,

    initialize: function(options){
      var args = options || {};
      this.singleID = args.singleID;
      this.collectionPosts = args.collectionPosts;
      this.collectionUsers = args.collectionUsers;
      this.render();

      $('.container').html(this.el);

    },

    render: function() {
      var self = this;
      this.collectionPosts = new app.Collections.Posts();

      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
      this.$el.html(this.template({user: app.LoggedInUser, post:singlePost.toJSON()}));

    }.bind(this));

      //$('.belowContainer').html(self.template(app.LoggedInUser));

      //  var leaderboardList = $.get(app.rootURL + '/leaderboard', function(data){
      //   console.log(data);

      // }).done(function(data) {
      //   console.log(data);
      //   $('.belowContainer').html(self.templateList({user: leaderboardList.responseJSON }));

      // });


    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main', {trigger: true});
    },


  });



}());
