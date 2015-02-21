define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var FileModel = Backbone.Model.extend({
  	defaults : function() {
      return {
        name: "jakisplik",
        selected: false,
        type: 'file'
      }
    },
    initialize: function() {
      if(!this.get('name')) {
        this.set(this.defaults());
      }
    },
    toggle: function() {
      this.save({
        selected:!this.get('selected')
      })
    }

  });

  return FileModel;

});
