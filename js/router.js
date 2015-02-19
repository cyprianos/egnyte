// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/file/FilesView'
], function($, _, Backbone, FilesView) {
  
  var AppRouter = Backbone.Router.extend({
    initialize: function() {
      
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
      });
      // layout.render();

      // layout.$el.appendTo('#w');
      // layout.$el.appendTo('#w');
      layout.render();

      $("#w").empty().append(layout.el);


      // layout.render();
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    // app_router.on('route:defaultAction', function (actions) {
     
    //    // We have no matching route, lets display the home page 
    //     var homeView = new HomeView();
    //     homeView.render();
    // });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    // var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize,

  };
});
