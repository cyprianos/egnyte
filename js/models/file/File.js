define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var FileModel = Backbone.Model.extend({

  	defaults : function() {
      return {
        name: "jakisplik",
        selected: false
      }
    },
    initialize: function() {
      if(!this.get('name')) {
        this.set({
          'name': this.defaults().name
        });
      }
    },
    toggle: function() {
      console.log('save');
      this.save({
        selected:!this.get('selected')
      })
    }

  });

  return FileModel;

});
