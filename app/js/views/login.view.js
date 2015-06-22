;(function (){

  'use strict';

  app.Views.Login = Backbone.View.extend({

    className: 'login',

    events: {
      'submit #registerForm' : 'registerUser',
      'submit #loginForm' : 'loginUser',
      'click #signUp' : 'signUpForm',
      'click #returnLogin' : 'returnToLogin'
    },

    template: hbs.login,

    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      $('header').addClass('hide');
      $('.sidebarWrapper').addClass('hide');
      this.render();
      $('.container').html(this.el);


    },

    render: function(){
      $('header').addClass('hide');
      $('.sidebarWrapper').addClass('hide');
      this.$el.html(this.template())
    },

    signUpForm: function (e) {
      e.preventDefault();

      $('#registerDiv').removeClass('hide');
      $('#loginDiv').addClass('hide');
    },

    returnToLogin: function (e) {
      e.preventDefault();

      $('#loginDiv').removeClass('hide');
      $('#registerDiv').addClass('hide');
    },


    //register new user function
    registerUser: function(e) {
      e.preventDefault();

      //get input values from form
      var self = this,
          form = $(event.target),
          username = form.find('#regusername').val(),
          email = form.find('#email').val(),
          password =  form.find('#regpassword').val();

      //new instance of user model
      var u = new app.Models.UserModel({
        username: username,
        email: email,
        password: password
      });

      //post request variable
      var postRegister = $.post(app.rootURL + '/users/register', u.toJSON())

      //add new user model to data/collection and trigger main view
      postRegister.done ( function (data) {
        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        app.LoggedInUser = data;
        $.ajaxSetup({
          headers: {
            'Access-Token' : Cookies.get('access_token')
          }
        });
        app.mainRouter.navigate('/main', { trigger: true });

      });

      postRegister.error( function (data) {
        $('#errormsgregister').html('<p>Sorry, that username has already been taken. Please choose another and try again.</p>')
      });

    },

    //log in existing user function
    loginUser: function(e) {
      e.preventDefault();

      //get input values from form
      var self = this,
          form = $(event.target),
          username = form.find('#loginusername').val(),
          password =  form.find('#loginpassword').val();

      //get data from database to make sure user has access token
      //then trigger main view upon success

      var loginPerson = {username: username, password: password};
      var postLogin = $.post(app.rootURL + '/users/login', loginPerson)

      postLogin.done( function (data) {
        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        app.LoggedInUser = data;
        // console.log(app.LoggedInUser);
        $.ajaxSetup({
          headers: {
            'Access-Token' : Cookies.get('access_token')
          }
        });
        app.mainRouter.navigate('/main', { trigger: true });

      });

      postLogin.error( function (data) {
        $('#errormsg').html('<p>Invalide username and/or password.</p>')
      });

    }


  });


}());
