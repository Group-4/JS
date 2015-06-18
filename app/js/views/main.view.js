;(function() {

  'use strict';


  app.Views.Main = Backbone.View.extend ({

    className: 'main',

    events: {

        'click #image': 'playGame',
        'click #delete': 'deleteAccount',
    },

    template: hbs.main,

    initialize: function(options) {

        var args = options || {};
        this.render();
        $('.container').html(this.el);
    },

    render: function() {

        this.$el.html(this.template(this.template()))
        return this;
    },
// CLICK ON IMAGE BEGINS GAME PLAY
// GAME OPENS IN A NEW URL
    image: function() {
        window.open(this.model.get("url"));

    },


    playGame: function(event) {
        event.preventDefault();

        var image = event.target;
        app.mainRouter.navigate('/single', {
            trigger: true
        });

    },

    // DELETING ACCOUNT
deleteAccount: function (event) {

      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');

      if (window.confirm("Delete your Qpic account?")) {
        deleteAccount.destroy().success( function () {
           app.mainRouter.navigate('', { trigger: true });
        });
      }
  }

});

}());
