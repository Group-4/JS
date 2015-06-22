;(function (){

  'use strict';

  // global
  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};
  window.app.LoggedInUser = {};

  // declare root URL
  app.rootURL = 'http://tiyqpic.herokuapp.com';

  //set up access token
  $.ajaxSetup({
  headers: {
    'Access-Token' : Cookies.get('access_token')
    }
  });

}());
