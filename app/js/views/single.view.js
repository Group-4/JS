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
      this.singleID = args.singleID,
      this.collection = args.collections,

      this.render();
      $('.container').html(this.el);

    },

    render: function () {
      this.collection = new app.Collections.Posts();

      this.collection.fetch().done( function (data) {
        console.log(this.collection);
        console.log(this.collection.toJSON());
        var singlePost = this.collection.get(this.singleID);
        // console.log(this);
        // window.k = singlePost;
        // window.c = this.collection;
        // window.i = this.singleID;
        this.$el.html(this.template(singlePost.toJSON()));

      }.bind(this));

    },

    makeGuess: function (e) {
      e.preventDefault();
      app.mainRouter.navigate('/leaderboard', {trigger: true});
    }

  });


}());
