// ;(function (){

//   'use strict';

//   app.Views.Solved = Backbone.View.extend({

//     className: 'main',

//     events: {
//       'click #solves' : 'solves'
//     },

//     template: hbs.main,
//     templateSidebar: hbs.sidebar

//     initialize: function(options){
//       var args = options || {};
//       this.collectionUsers = args.collectionUsers;
//       this.collectionPosts = args.collectionPosts;
//       this.collectionUserPosts = args.collectionUserPosts;

//       this.render();

//       $('.container').html(this.el);

//     },

//     render: function() {
//       var self = this;
//       this.collectionPosts = new app.Collections.Posts();

//       var allUserSolves = $.get(app.rootURL + '/posts/:id' + app.LoggedInUser.username, function(data) {
//               var response = allUserSolves.responseJSON;
//             }).done(function (data) {
//               self.$el.html(self.template({ solved: allUserSolves.responseJSON }));
//             });

//             $('#solved').html(this.templateSidebar(app.LoggedInUser));

//    }
// });
// },

// $(function() {
//         $('.deletePost').on('click', (function(e) {
//             e.preventDefault();

//             var button = button;
//             var url = this.href;
//             var $post = $('#deletePost');

//             $('deletePost').removeClass('current');
//             $('#container').remove();

//             var element = $(this);
//             var deletePost = element.attr("id");
//             var delUserPost = 'id=' + deleteUserPost;
//             var content = $('#content');

//             $('deletePost.current').removeClass('current');
//             $('#container').remove();

//             if (confirm("Delete your post?")) {
//                 // AJAX TO DELETE
//                 $.ajax({
//                     type: "POST",
//                     url: url,
//                     data: delUserPost,
//                     success: function() {
//                         // console.log("Your Post has been deleted!");
//                     },
//                     complete: function() {
//                         $('#loading').remove();
//                     },
//                     success: function() {
//                         $content.html($(data).find('#container')).hide();
//                     },
//                 });
//             },
//         }));


//     }
// }
