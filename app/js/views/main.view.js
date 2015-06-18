;(function() {

  'use strict';


  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
        'click #play': 'playGame',
        'click #image': 'displayImage',
        'click #delete': 'deleteAccount',
        'click #sidebar': 'showSidebar',
        'click #score': 'displayScore',
        'click #leaderboard': 'displayLeaderboard'
    },

    initialize: function(options) {

        var args = options || {};

        this.singleID = args.singleID;
        this.collection = args.collection;

        this.render();
        $('.container').html(this.el);
    },

    render: function() {

        this.$el.html(this.template(this.user.model.attributes));
        return this;
    },

    open: function() {
        window.open(this.user.model.get("url")); // JAIME & KELLY - WILL USER GET UNIQUE URL? MEANING, WHERE THEY LEFT OFF IN THE GAME?  IS THAT DRIVEN BY COOKIES OR POST ID THAT WILL BE HIDDEN?
    },

    select: function() {
        this.user.model.set({
            selected: true
        });
    },


    playGame: function(event) {
        event.preventDefault();

        var button = event.target;
        app.mainRouter.navigate('', {
            trigger: true
        });

    },
deleteAccount: function (event) {

      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');

      if (window.confirm("Delete your Qpic account?")) {
        deleteAccount.destroy().success( function () {
           app.mainRouter.navigate('', { trigger: true });
        });



  });

}());
