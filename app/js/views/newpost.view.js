;(function (){

  'use strict';

  app.Views.NewPost = Backbone.View.extend({
    className: 'newpost',

    events: {
      'click #submitPost' : 'postImage'
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

    postImage: function () {
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

      $.post(app.rootURL + '/posts', p.toJSON()).done ( function (data) {
        console.log('posted to posts endpoint')
        $('#postImage').get(0).reset();
        app.mainRouter.navigate('/main', { trigger: true });
      });

    }

  });


}());
