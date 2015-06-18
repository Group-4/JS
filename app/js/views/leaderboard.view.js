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
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);

    },

    render: function() {
      this.$el.html(this.template());
    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main/:id', {trigger: true});
    }

  });



}());
