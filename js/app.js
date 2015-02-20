// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'views/file/FilesView'

], function($, _, Backbone, FilesView){
    MyApp = new Backbone.Marionette.Application();
    MyApp.addRegions({
      mainRegion: "#w"
    })
    MyApp.addInitializer(function(options) {
      var filesView = new FilesView({
        collection: options.files
      });
      MyApp.mainRegion.show(filesView);
    });
  return MyApp;
});
