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
        if(files.length===0) {
          files = new Files([
            {name: 'super plik 1'},
            {name: 'super plik 2'},
            {name: 'super plik 3'},
          ]);
        }
        
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