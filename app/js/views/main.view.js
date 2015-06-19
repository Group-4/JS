;(function() {

  'use strict';

  app.Views.Main = Backbone.View.extend({
    className: 'main',

    events: {
    'click #delete': 'deleteAccount',
    },

  template: hbs.main,

  initialize: function(options) {
    var args = options || {};
    this.collection = args.collection;
    this.render();
    $('.container').html(this.el);
  },

  render: function() {

    this.collection = new app.Collections.Posts();

    this.collection.fetch().done(function(data) {

    this.$el.html(this.template({image: this.collection.toJSON(), owner: this.collection.toJSON(), answer: this.collection.toJSON()}))
    }.bind(this));



}

  });
}());

