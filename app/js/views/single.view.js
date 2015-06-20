;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({
    className: 'single',

    events: {
      'submit #guessInput' : 'makeGuess',
      'click #deletePost' : 'deletePost',
      'click #seeOldGuesses' : 'oldGuesses'
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

      this.collectionPosts.fetch().done( function (data) {
        var singlePost = this.collectionPosts.get(this.singleID);
        this.$el.html(this.template(singlePost.toJSON()));
      }.bind(this));

    },

    deletePost: function (e) {
    e.preventDefault();

    var button = event.target;
    console.log(button);
    var postIdToDelete = $(button).data('id');
    console.log(postIdToDelete);

    $.ajax({
      url: app.rootURL + '/posts/' + postIdToDelete,
      type: 'DELETE',
      success: function() {
        console.log('deleted');
        $(button).parentsUntil('.single').html('<div class="response"><p class="deletedResponse">Your post and all associated guesses have been deleted.</p><i class="fa fa-paper-plane-o deletedResponse"></i><p class="deletedResponse">Sending you back to the home page in 3 seconds...</p></div>');
        window.setTimeout(function () {
          app.mainRouter.navigate('/main', {trigger: true});
          }, 3000);
      }
    })

  },

  oldGuesses: function () {
    // append incorrect guesses beneath post
    $.get(app.rootURL + '/posts/' + this.singleID + '/guesses', function (data) {
      var allGuesses = data;
      $('.singleGuesses').find('ul').empty();
      allGuesses.forEach(function (guess) {
      // console.log(guess.user_id);
      // console.log(app.LoggedInUser.id);
      // console.log(guess.guess);
      if (guess.user_id === app.LoggedInUser.id) {
        console.log('match', guess.user_id, app.LoggedInUser.id, guess.guess);
        // var element = $('.singleGuesses').find('ul').html('hi');
        // console.log(element);
        $('.singleGuesses').find('#incorrectGuesses').append('<li>' + guess.guess + '</li>');
        }
        else {
        $('.singleGuesses').find('#incorrectGuesses').html('<p>no previous guesses</p>');
        }
      })
    })
  },

    makeGuess: function (e) {
      e.preventDefault();
      var self = this;

      var guessLowerCase = this.$el.find('#guess').val().toLowerCase();
      var guessNoSpaces = guessLowerCase.replace(/ /g,'');
      var finalGuess = guessNoSpaces.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g, '');

      var singlePost = this.collectionPosts.get(this.singleID);
      var singlePostData = singlePost.toJSON();
      var initialAnswer = singlePostData.answer;
      var answerLowerCase = initialAnswer.toLowerCase();
      var answerNoSpaces = answerLowerCase.replace(/ /g, '');
      var finalAnswer = answerNoSpaces.replace(/[&\/\\#,+()$~%.'":;*?<>{}!]/g, '');

      if (finalGuess === finalAnswer) {
        $.post(app.rootURL + '/posts/' + self.singleID + '/guesses', {guess: finalGuess}).done ( function (data) {
          app.mainRouter.navigate('leaderboard/' + self.singleID, {trigger: true});
        });

      } else {
        $.post(app.rootURL + '/posts/' + self.singleID + '/guesses', { guess: finalGuess }).done ( function (data) {
          console.log('nope, not right')
          $('#guessInput').get(0).reset();

          console.log($('#incorrectGuesses').html())

          if ($('#incorrectGuesses').html() !== '') {
            $('#incorrectGuesses').append('<li>' + finalGuess + '</li>');
          }

        })
      }

    }

  });


}());
