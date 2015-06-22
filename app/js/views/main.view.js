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

    templateList: hbs.list,


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

      $('header').removeClass('hide');
      $('sidebarWrapper').removeClass('hide');

      var leaderboardList = $.get(app.rootURL + '/leaderboard', function(data){
      }).done(function(data) {
        $('.asideBottom').html(self.templateList({user: leaderboardList.responseJSON }));

      });

      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));

// DELETE POST
      // if (user_id === app.LoggedInUser.id) {
     // $('deletePost').html(this.templateNewPost(app.deletePost));
     // DELETE ACCOUNT
    //  $('deleteAccount').html(this.templateSidebar(app.deleteAccount));
    },



    // DELETING ACCOUNT
 // $(function () {
 //    $(".deleteAccount").click(function () {
 //      var button = button;
 //      var url = "http://tiyqpic.herokuapp.com//users/:id";
 //      var element = $(this);
 //      var deleteID = element.attr("id");
 //      var delUserAcct = 'id=' + deleteUserID;

 //      if(confirm("Delete your Qpic account?")){
 //    // AJAX TO DELETE
 //        $.ajax({
 //          type: "POST",
 //          url: "http://tiyqpic.herokuapp.com//users/:id",
 //          data: delUserAcct,
 //          success: function() {
 //          // console.log("Your Qpic account has been deleted!");
 //        }
 //    });


 //  },

  logout: function(e) {
    e.preventDefault();
    var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);
    Cookies.expire('access_token', app.LoggedInUser.access_token);
    app.mainRouter.navigate('', { trigger: true });
  }


});


}());
