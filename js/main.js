require.config({
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore-amd/underscore',
    backbone: 'vendor/backbone-amd/backbone',
    layoutmanager: 'vendor/layoutmanager/backbone.layoutmanager',
    marionette: 'vendor/marionette/lib/core/backbone.marionette',

    'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter',
    templates: '../templates',
    json2: 'vendor/json2/json2'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',
  'collections/files/Files'

], function(App, Files){
  var dummyData = new Files([
    {name: 'super plik 1'},
    {name: 'super plik 2'},
    {name: 'super plik 3'},
  ]);

  App.start({
    files: dummyData
  });
});
