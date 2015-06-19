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
      this.render();
      $('.container').html(this.el);

    },

    render: function() {

      this.collectionPosts = new app.Collections.Posts();

      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
        console.log(this);
      this.$el.html(this.template(singlePost.toJSON()));
    }.bind(this));

    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main', {trigger: true});
    }

  });



}());
