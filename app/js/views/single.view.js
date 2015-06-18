;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({
    className: 'single',

    events: {
      'click #makeGuess' : 'makeGuess'
    },

    template: hbs.single,

    initialize: function (options) {
      var args = options || {};

      // this.singleID = args.singleID,
      // this.collection = args.collections,

      this.render();
      $('.container').html(this.el);

    },

    render: function () {
      this.$el.html(this.template());
      // var singlePost = this.collection.get(this.singleID);
      // this.$el.html(this.template(singlePost.toJSON()));
    },

    makeGuess: function () {
      console.log('good guess')
    }

  });


}());
