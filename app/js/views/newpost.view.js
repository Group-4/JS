;(function (){

  'use strict';

  app.Views.NewPost = Backbone.View.extend({
    className: 'newpost',

    events: {
      'submit #postImage' : 'postImage'
    },

    template: hbs.newpost,

    initialize: function (options) {
      var args = options || {};

      // this.singleID = args.singleID,
      // this.collection = args.collections,

      this.render();
      $('.container').html(this.el);

    },

    render: function () {
      this.$el.html(this.template());
      // var singlePost = this.collection.get(this.singleID);
      // this.$el.html(this.template(singlePost.toJSON()));
    },

    postImage: function (e) {
      e.preventDefault();
      //get input values from form
      var self = this,
          form = $(event.target),
          image_url = form.find('#image_url').val(),
          answer = form.find('#answer').val();

      //new instance of user model
      var p = new app.Models.PostModel({
        image_url: image_url,
        answer: answer
      });

      // $.get(app.rootURL + '/posts', p.toJSON()).done ( function (data) {
      //   console.log(image_url);
      //   console.log(answer);
      // });

      $.post(app.rootURL + '/posts', p.toJSON()).done ( function (data) {
        $('#postImage').get(0).reset();
        // successful post alert on page
        // button to click and add another and button to navigate home
        // app.mainRouter.navigate('/main', { trigger: true });
      });

    }

  });


}());
