// Filename: app.js
define([
  'jquery',
  'json2',
  'underscore', 
  'backbone',
  'marionette',
  'views/file/FilesView'

], function($, JSON, _, Backbone, Marionette, FilesView){
    MyApp = new Marionette.Application();
    MyApp.addRegions({
      mainRegion: "#w"
    })
    MyApp.addInitializer(function(options) {
      var filesView = new FilesView({
        collection: options.files
      });
      MyApp.mainRegion.show(filesView);
      Backbone.history.start();
    });
  return MyApp;
});
