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
      this.collection = new app.Collections.Posts();
      // var allUsers = new app.Collections.Users();


      this.collection.fetch().done( function (data) {

        // this.collection.each( function (d) {

        // })


        var singlePost = data.get(data.singleID);

        console.log(singlePost);
        this.$el.html(this.template(singlePost.toJSON()));
      }.bind(this));

      // allUsers.fetch().done( function(data){
      //   console.log(allUsers);
      //   this.$el.html(this.template(this.collection.toJSON()));
      // }.bind(this));
    },

    keepPlaying: function(e) {
      e.preventDefault();
      app.mainRouter.navigate('/main/:id', {trigger: true});
    }

  });



}());
