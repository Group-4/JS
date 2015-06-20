;(function() {

  'use strict';

    app.Views.Main = Backbone.View.extend({

      className: 'main',

    events: {
    'click #delete': 'deleteAccount',
    },

    template: hbs.main,

    templateSidebar: hbs.sidebar,


    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionUserPosts = args.collectionUserPosts;

      // this.collection('destroy', this.destroyed,this);
      this.render();
      $('.container').html(this.el);

    },


    render: function() {
      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));

      var self = this;

      var allUserPosts = $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/unsolved', function(data) {
      var response = allUserPosts.responseJSON;
      console.log(self.$el);
      }).done(function (data) {
      self.$el.html(self.template({ image: allUserPosts.responseJSON }));
      });

    },

    destroyed: function () {
      console.log ('Delete your Qpic account?');
    },

    // DELETING ACCOUNT
    deleteAccount: function (event) {

      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');

      if (window.confirm("Delete your Qpic account?")) {
        this.collection.destroy().success(function() {
        app.mainRouter.navigate('', {
        trigger: true });
      });
    }

  }


});


}());
