;(function (){

  'use strict';

  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};

  // app.rootURL = 'http://tiy-515.herokuapp.com/collections/group4test';

  app.rootURL = 'http://tiyqpic.herokuapp.com';

  //set up access token
  $.ajaxSetup({
  headers: {
    'Access-Token' : Cookies.get('access_token')
    }
  });

  app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
  if (app.isLoggedIn) {
    console.log('yep logged in ');
    //ping to server to check if valid access token here
  } else {
    console.log('nope not logged in');
  }


}());
