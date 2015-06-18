;(function (){

  'use strict';

  app.Views.Login = Backbone.View.extend({

    className: 'login',

    events: {
      'submit #registerForm' : 'registerUser',
      'submit #loginForm' : 'loginUser'
    },

    template: hbs.login,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;
      this.userID = args.userID;
      this.render();
      $('.container').html(this.el);


      app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;

        if (app.isLoggedIn) {
          app.mainRouter.navigate('/main/:id', {trigger: true});

        } else {
          app.mainRouter.navigate('', {trigger: true});
        }

    },

    render: function(){
      this.$el.html(this.template())
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


      //add new user model to data/collection and trigger main view
      $.post(app.rootURL + '/users/register', u.toJSON()).done ( function (data) {
        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        app.mainRouter.navigate('/main/:id', { trigger: true });

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

      $.post(app.rootURL + '/users/login', loginPerson).done( function (data) {
        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        app.mainRouter.navigate('/main/:id', { trigger: true });

      });


    }


  });


}());
