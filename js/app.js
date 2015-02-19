// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
  'layoutmanager',
], function($, _, Backbone, Router, Layout){
  var initialize = function(){
    console.log(Layout);
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
