;(function() {

  'use strict';

    app.Views.Main = Backbone.View.extend({

      className: 'main',

    events: {
    'click #deletePost' : 'deletePost',
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
      this.collection

      this.render();
      $('.container').html(this.el);
    },

    render: function() {

      var self = this;

      var allUserPosts = $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/unsolved?sort=difficult', function(data) {
        var response = allUserPosts.responseJSON;
      }).done(function (data) {
        self.$el.html(self.template({ image: allUserPosts.responseJSON }));
      });

      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));
// DELETE POST
      // if (user_id === app.LoggedInUser.id) {
     // $('deletePost').html(this.templateNewPost(app.deletePost));
     // DELETE ACCOUNT
     $('deleteAccount').html(this.templateSidebar(app.deleteAccount));
    },



    // DELETING ACCOUNT
    // $(function () {
    // $('.deleteAccount').on('click', (function (e) {
    //   e.preventDefault();
    //   var button = button;
    //   var url = this.href;
    //   var $post = $('#deleteAccount');

    //  $('deleteAccount').removeClass('current');
    //  $('#container').remove();

    //   var element = $(this);
    //   var deleteID = element.attr("id");
    //   var delUserAcct = 'id=' + deleteUserID;
    //   var content = $('#content');

    //  $('deleteAccount.current').removeClass('current');
    //  $('#container').remove();

    //     if(confirm("Delete your Qpic account?")){
    // // AJAX TO DELETE
    //       $.ajax({
    //         type: "POST",
    //         url: url,
    //         data: delUserAcct,
    //         success: function() {
    //       // console.log("Your Qpic account has been deleted!");
    //     },
    //       complete: function() {
    //       $('#loading').remove();
    //     },
    //       success: function () {
    //         $content.html( $(data).find('#container')).hide();
    //     }
    // });


  // },

  logout: function(e) {
    e.preventDefault();
    // console.log(app.LoggedInUser.access_token);
    var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);
    // console.log(cookie);
    Cookies.expire('access_token', app.LoggedInUser.access_token);
    app.mainRouter.navigate('', { trigger: true });
  }


});


}());
