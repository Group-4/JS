;(function (){

  'use strict';

  app.Views.Login = Backbone.View.extend({


    className: 'login',

    events: {
      'submit ' : 'registerUser',
      'submit ' : 'addUser'
    },

    template: hbs.login,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;
      this.render();
      $('.container').html(this.el);

    },

    render: function(){
      this.$el.html(this.template)
    },

    registerUser: function(e) {
      e.preventDefault();

      var self = this,
          form = $(event.target),
          email =
          password =
    }


  });



}());
