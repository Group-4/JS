;(function() {

  'use strict';

    app.Views.Main = Backbone.View.extend({

      className: 'main',

    events: {
    'click #deletePost' : 'deletePost',
    'click #delete': 'deleteAccount',
    'click #logoutBtn' : 'logout',
    'click .deleteBtn' : 'deletePost'
    },

    template: hbs.main,

    templateSidebar: hbs.sidebar,

    templateList: hbs.list,


    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionUserPosts = args.collectionUserPosts;

      this.render();
      $('.container').html(this.el);
      console.log(app.LoggedInUser);
    },

    render: function() {
      var self = this;

      // Get all users' unsolved posts from database and drop data into template
      var allUserPosts = $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/unsolved?sort=difficult', function(data) {
        var response = allUserPosts.responseJSON;
      }).done(function (data) {
        self.$el.html(self.template({ image: allUserPosts.responseJSON }));
        // add delete post button to logged in user's posts only
        allUserPosts.responseJSON.forEach( function (userPost) {
          if (app.LoggedInUser.username === userPost.owner) {
            var postID = userPost.id;
            $('.deleteBtn[data-id ="' + postID + '"]').html('<i class="fa fa-minus-square"></i>');
          }
        })
      });

      // Show header and sidebar
      $('header').removeClass('hide');
      $('sidebarWrapper').removeClass('hide');
      // Get leaderboard data and drop into template
      var leaderboardList = $.get(app.rootURL + '/leaderboard', function(data){
      }).done(function(data) {
        $('.asideBottom').html(self.templateList({user: leaderboardList.responseJSON }));
      });
      // Drop sidebar template into sidebar
      $('.sidebar').html(this.templateSidebar(app.LoggedInUser));
    },

    deletePost: function () {
      // Find post with correct post id to delete
      var button = $(event.target).parent();
      var postIdToDelete = $(button).data('id');
      // send delete request
      $.ajax({
        url: app.rootURL + '/posts/' + postIdToDelete,
        type: 'DELETE',
        success: function() {
          $(button).parents('li').fadeOut();
        }
      });
    },

  logout: function(e) {
    e.preventDefault();
    var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);
    Cookies.expire('access_token', app.LoggedInUser.access_token);
    app.mainRouter.navigate('', { trigger: true });
  }


});


}());
