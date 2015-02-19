// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'layoutmanager',
], function($, _, Backbone, Router, Layout){
  var initialize = function(){
    Backbone.Layout.configure({
      manage:true
    });
    // console.log(Layout);
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
