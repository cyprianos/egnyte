// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'layoutmanager',
], function($, _, Backbone, Router, Layout){
  var initialize = function(){
    console.log('isLayoutLoaded', Layout);
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
