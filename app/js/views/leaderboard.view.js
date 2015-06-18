;(function (){

  'use strict';

  app.Views.Leaderboard = Backbone.View.extend({

    className: 'leaderboard',

    template: hbs.leaderboard,

    initialize: function(options){
      var args = options || {};
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);

    },

    render: function() {
      this.$el.html(this.template());
    }

  });



}());
