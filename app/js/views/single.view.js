;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({
    className: 'single',

    events: {
      'submit #guessInput' : 'makeGuess'
    },

    template: hbs.single,

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

      this.collectionGuesses = new app.Collections.Guesses();

      this.collectionGuesses.fetch().done( function (data) {
        console.log(this.collectionGuesses);
        // var postGuesses = this.collectionGuesses.get(this.postID)
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
        })
      }


    }

  });


}());
