;(function (){

  'use strict';

  app.Views.NewPost = Backbone.View.extend({
    className: 'newpost',

    events: {
      'submit #postImage' : 'postImage',
      'click #home' : 'home'
      // 'click #delete' : 'deletePost'
    },

    template: hbs.newpost,

    initialize: function (options) {
      var args = options || {};
      this.render();
      $('.container').html(this.el);

    },

    render: function () {
      this.$el.html(this.template());
    },

    home: function () {
      app.mainRouter.navigate('/main', { trigger: true });
    },

    postImage: function (e) {
      e.preventDefault();
      //get input values from form
      var self = this,
          form = $(event.target),
          image_url = form.find('#image_url').val(),
          answer = form.find('#answer').val(),
          hint = form.find('#hint').val();

      //new instance of user model
      var p = new app.Models.PostModel({
        image_url: image_url,
        answer: answer,
        hint: hint
      });

      $.post(app.rootURL + '/posts', p.toJSON()).done ( function (data) {
        $('#postImage').get(0).reset();
        $('#preview').html('<div class="fullPreview"><p>Preview of added post</p><div class="newImageWrap"><div class="poster"><i class="fa fa-camera"> Posted by: <span>' + app.LoggedInUser.username + '</span></i></div><div class="actualImage"><img src="' + image_url + '"></div><div class="databox"><p>HINT: ' + hint + '</p></div></div></div>');
      });
    },

//  DELETE POST
  //   //   $.post(app.rootURL + '/posts/:id', .toJSON()).done ( function (data) {
  //   //     $('#deletePost').get('id');
  //   //   });

  //   //   $(function () {
  //   //   $(".deletePost").click(function () {
  //   //     var button = button;
  //   //     var url = "http://tiyqpic.herokuapp.com/posts/:id";
  //   //     var element = $(this);
  //   //     var deleteID = element.attr("id");
  //   //     var toBeDeleted = 'id=' + deletedID;

  //   //     if(confirm("Delete your post?")){
  //   //   // AJAX TO DELETE
  //   //       $.ajax({
  //   //         type: "POST",
  //   //         url: "http://tiyqpic.herokuapp.com/posts/:id",
  //   //         data: toBeDeleted,
  //   //         success: function() {
  //   //         // console.log("Your Post has been deleted!");
  //   //       }
  //   // });


  // }




});


}());
