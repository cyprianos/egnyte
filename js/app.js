// Filename: app.js
define([
  'jquery',
  'json2',
  'underscore', 
  'backbone',
  'marionette',
  'localstorage',
  'collections/files/Files',
  'views/file/FilesView'

], function($, JSON, _, Backbone, Marionette, LocalStorage,Files, FilesView){
    

    MyApp = new Marionette.Application();
    MyApp.addRegions({
      mainRegion: "#w"
    });
    var files = new Files();
    files.fetch({
      success: function() {
         MyApp.addInitializer(function() {
          var filesView = new FilesView({
            collection: files
          });
          MyApp.mainRegion.show(filesView);
          Backbone.history.start();
        });
      }
    });
   
  return MyApp;
});