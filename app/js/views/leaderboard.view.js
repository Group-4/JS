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
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);

    },

    render: function() {

      var allPosts = new app.Collections.Posts();
      //var allUsers = new app.Collections.Users();
      this.collection = allPosts;
      allPosts.fetch().done( function (data) {
        var singlePost = this.collection.get(this.singleID);
        console.log(this);
      this.$el.html(this.template(singlePost.toJSON()));
    });
    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main/:id', {trigger: true});
    }

  });



}());
