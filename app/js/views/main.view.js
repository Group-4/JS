;(function() {

  'use strict';

    app.Views.Main = Backbone.View.extend({

      className: 'main',

    events: {
    'click #delete': 'deleteAccount',
    'click #logoutBtn' : 'logout'
    },

    template: hbs.main,

    templateSidebar: hbs.sidebar,


    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionUserPosts = args.collectionUserPosts;
      this.render();
      $('.container').html(this.el);

    },

    render: function() {

      var self = this;

      var allUserPosts = $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/unsolved', function(data) {
        var response = allUserPosts.responseJSON;
      }).done(function (data) {
        self.$el.html(self.template({ image: allUserPosts.responseJSON }));
      });

      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));


      // this.collectionPosts.fetch().done(function (data) {
      //   this.$el.html(this.template({ image: this.collectionPosts.toJSON() }))
      // }.bind(this));

    },

    // DELETING ACCOUNT
  //   deleteAccount: function (event) {

  //     event.preventDefault();

  //     var button = event.target;
  //     var modelID = $(button).data('id');

  //     // if (window.confirm("Delete your Qpic account?")) {
  //     //   this.collection.destroy().success( function () {
  //     //      app.mainRouter.navigate('', { trigger: true });
  //     //   });
  //     //}
  // },

  logout: function(e) {
    e.preventDefault();
    console.log('clicking logout');
    console.log(app.LoggedInUser.access_token);
    var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);
    console.log(cookie);
    Cookies.expire('access_token', app.LoggedInUser.access_token);
    app.mainRouter.navigate('', { trigger: true });
  }


});


}());
