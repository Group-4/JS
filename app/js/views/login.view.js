;(function (){

  'use strict';

  app.Views.Login = Backbone.View.extend({

    className: 'login',

    events: {
      'submit #registerForm' : 'registerUser',
      'submit #loginForm' : 'loginUser',
      // 'click #logout' : 'logout'
    },

    template: hbs.login,

    initialize: function(options) {
      var args = options || {};
      this.collectionUsers = args.collectionUsers;
      this.render();
      $('.container').html(this.el);

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
        // Cookies.expire('access_token', app.LoggedInUser.access_token);
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
        // Cookies.expire('access_token', app.LoggedInUser.access_token);
        Cookies.set('access_token', data.access_token);
        Cookies.set('username', data.username);
        app.LoggedInUser = data;
        // var cookie = Cookies.get('access_token', data.access_token);
        // console.log(cookie);
        console.log(app.LoggedInUser);
        $.ajaxSetup({
          headers: {
            'Access-Token' : Cookies.get('access_token')
          }
        });
        app.mainRouter.navigate('/main', { trigger: true });

      });

    },

    // logout: function(e) {
    //   e.preventDefault();
    //   Cookies.expire('access_token').get('access_token');
    //   app.mainRouter.navigate('', { trigger: true });
    // }


  });


}());
