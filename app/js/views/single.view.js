;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({
    className: 'single',

    events: {
      'submit #guessInput' : 'makeGuess',
      'click #deletePost' : 'deletePost',
      'click #seeOldGuesses' : 'oldGuesses',
      'click #hint' : 'showHint'
    },

    template: hbs.single,
    templateSidebar: hbs.sidebar,

    initialize: function (options) {
      var args = options || {};
      this.singleID = args.singleID,
      this.collectionPosts = args.collectionPosts,
      this.collectionGuesses = args.collectionGuesses,
      this.render(),
      $('.container').html(this.el);
    },

    render: function () {

      this.collectionPosts = new app.Collections.Posts();
      // Get posts data and drop into template
      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
        this.$el.html(this.template(singlePost.toJSON()));
      }.bind(this));

      // get all guesses on individual post by logged in user
      $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/' + this.singleID + '/guesses', function (data) {
          var allGuesses = data;
          $('.singleGuesses').find('ul').empty();
          // append each incorrect guess below image
          allGuesses.forEach(function (guess) {
            $('.singleGuesses').find('#incorrectGuesses').append('<li>' + guess.guess + '</li>');
          })
        })
    },

    deletePost: function (e) {
    e.preventDefault();

    var button = event.target;
    var postIdToDelete = $(button).data('id');
    // Send delete request to posts endpoint for individual post and return success statement
    $.ajax({
      url: app.rootURL + '/posts/' + postIdToDelete,
      type: 'DELETE',
      success: function() {
        $(button).parentsUntil('.single').html('<div class="response"><p class="deletedResponse">Your post and all associated guesses have been deleted.</p><i class="fa fa-paper-plane-o deletedResponse"></i><p class="deletedResponse">Sending you back to the home page in 3 seconds...</p></div>');
        window.setTimeout(function () {
          app.mainRouter.navigate('/main', {trigger: true});
          }, 2000);
      },
      error: function () {
        $(button).html('<p class="sorry">Sorry, you are not authorized to delete this post.</p>')
      }
    })

  },

  oldGuesses: function () {
      // get all guesses on individual post by logged in user
      $.get(app.rootURL + '/users/' + app.LoggedInUser.username + '/' + this.singleID + '/guesses', function (data) {
          var allGuesses = data;
          $('.singleGuesses').find('ul').empty();
          // Append previous guesses by logged in user to ul
          allGuesses.forEach(function (guess) {
            $('.singleGuesses').find('#incorrectGuesses').append('<li>' + guess.guess + '</li>');
          })
        })
    // Toggle show/hide on previous incorrect guesses
    $('#incorrectGuesses').toggleClass('show');
  },

  showHint: function (e) {
    $('.hint').addClass('showhint');
  },

    makeGuess: function (e) {
      e.preventDefault();
      var self = this;
      // Get guess value, remove spaces, capital letters, spaces and special characters
      var guessValue = this.$el.find('#guess').val();
      var guessLowerCase = this.$el.find('#guess').val().toLowerCase();
      var guessNoSpaces = guessLowerCase.replace(/ /g,'');
      var finalGuess = guessNoSpaces.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '');
      // Get answer
      var singlePost = this.collectionPosts.get(this.singleID);
      var singlePostData = singlePost.toJSON();
      var initialAnswer = singlePostData.answer;
      // var answerLowerCase = initialAnswer.toLowerCase();
      // var answerNoSpaces = answerLowerCase.replace(/ /g, '');
      // var finalAnswer = answerNoSpaces.replace(/[&\/\\#,+()$~%.'":;*?<>{}!]/g, '');

      // Post guess to database
      var postGuess = $.post(app.rootURL + '/posts/' + self.singleID + '/guesses', {guess: finalGuess})
      // Error message if they guess on their own post
      postGuess.error( function (data) {
        console.log('nope');
        $('#errorMsgGuess').html('<p class="guessError">Sorry, you cannot guess on your own post.</p>')
      });
      // Give user success statement if correct, add guess to incorrect list if incorrect
      if (finalGuess === initialAnswer) {
        postGuess.done ( function (data) {
          app.mainRouter.navigate('leaderboard/' + self.singleID, {trigger: true});
        });

      } else {
        postGuess.done ( function (data) {
          $('#guessInput').get(0).reset();
          if ($('#incorrectGuesses').html() !== '') {
            $('#incorrectGuesses').append('<li>' + guessValue + '</li>');
          }
        });

      }

    }

  });


}());
