;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({
    className: 'single',

    events: {
      'click #guessBtn' : 'makeGuess'
    },

    template: hbs.single,

    initialize: function (options) {
      var args = options || {};
      this.singleID = args.singleID;
      this.collectionPosts = args.collectionPosts;
      this.render();
      $('.container').html(this.el);

    },

    render: function () {

      this.collectionPosts = new app.Collections.Posts();

      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
        this.$el.html(this.template(singlePost.toJSON()));
      }.bind(this));


    },

    makeGuess: function (e) {
      e.preventDefault();

      var guessValue = this.$el.find('#guess').val();
      console.log(this);

      // if (guessValue === ) {

      // } else {

      // }

      app.mainRouter.navigate('leaderboard/' + this.singleID, {trigger: true});
    }

  });


}());
