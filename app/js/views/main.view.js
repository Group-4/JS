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
        this.render();
        $('.container').html(this.el);

      },


    render: function() {

      console.log(app.LoggedInUser);


      // this.collectionUsers.fetch().done(function(data) {
      //   this.template(app.LoggedInUser);
      // }.bind(this));


      this.collectionPosts.fetch().done(function (data) {
        this.$el.html(this.template({ image: this.collectionPosts.toJSON() }))
      }.bind(this));

      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));
    },


    // DELETING ACCOUNT
    deleteAccount: function (event) {

      event.preventDefault();

      var button = event.target;
      var modelID = $(button).data('id');

      // if (window.confirm("Delete your Qpic account?")) {
      //   this.collection.destroy().success( function () {
      //      app.mainRouter.navigate('', { trigger: true });
      //   });
      //}
  }


});


}());
