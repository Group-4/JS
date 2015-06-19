;(function (){

  'use strict';

  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};
  window.app.LoggedInUser = {};


  app.rootURL = 'http://tiyqpic.herokuapp.com';

  //set up access token
  $.ajaxSetup({
  headers: {
    'Access-Token' : Cookies.get('access_token')
    }
  });

}());
