// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'views/file/FilesView'
], function($, _, Backbone, Marionette, FilesView) {
  
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
      console.log('marion', Marionette);
    },
   
    routes: {
      // Default
      '*actions': 'index'
    },
    index: function() {
      var layout = new Backbone.Layout({
        template: "#layout",
        views: {
          "#list": new FilesView()
        }
      }).render();

      $("#w").empty().append(layout.el);

    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    // app_router.on('route:defaultAction', function (actions) {
     
    //    // We have no matching route, lets display the home page 
    //     var homeView = new HomeView();
    //     homeView.render();
    // });

    Backbone.history.start();
  };
  return { 
    initialize: initialize,

  };
});
