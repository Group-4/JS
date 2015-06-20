// ;(function (){

//   'use strict';

//   app.Views.SingleView = Backbone.View.extend({

//     className: 'main',

//     template: hbs.main,

//     events: {
//       'click #delete' : 'deletePost',

//     },

//     template: hbs.newpost,

//     initialize: function (options) {

//       var args = options || {};


//       this.collectionPosts = args.collectionPosts;

//       this.collection.Posts('destroy', this.destroyed, this);

//       this.render();
//       $('.container').html(this.el);
//     },

//     render: function () {
//  this.$el.html(this.template());


//     },

//     destroyed: function () {
//       console.log('An image was removed');
//     },

//     deletePost: function (event) {

//       var button = $(event.target),
//           image_url = form.find('#image_url').val(),
//           delete = $(button).data('id');

//       var d = new app.Models.PostModel({
//         image_url: image_url
//       });


//       if (window.confirm("Do you want to delete this image?")) {
//         whichOne.destroy().success( function () {
//            app.mainRouter.navigate('', { trigger: true });
//         });
//       }
//     }

//   });

// }());
