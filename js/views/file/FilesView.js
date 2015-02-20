define([
  'jquery',
  'underscore',
  'backbone',
  'views/file/FileView'
], function($, _, Backbone, FileView){
	var FilesView = Backbone.Marionette.CompositeView.extend({
		tagName: 'table',
		className: "table table-striped table-hover",
		id: "files",
		template: '#files-template',
		childView: FileView,
		initialize: function(options) {
			var col = this.options.collection;
			this.listenTo(col, 'change:selected', function(){
				// if(col.isChecked()) {
					this.$('th input').prop('checked', col.isChecked());
				// } else {
				// 	this.$el('th input').attr('ch')
				// }
			});
			// console.log('options',options)
			// console.log(this.options);
			// var collection = this.collection;
			// this.listenTo(collection, 'change:selected', function() {
			// 	var check = _.map(function(model){
			// 		// return model.get('selected');
			// 		console.log(model);
			// 		return 1;
			// 	});
			// 	console.log(check);
			// });
		},
		events: {
			'click th input': 'toggleAll'
		},
		toggleAll: function() {
			var checked = this.$('th input').is(':checked');
			var col = this.options.collection;
			//isSelected
			//var c = _.invoke(col.filter(function(){return true}), 'get', 'selected');
			col.each(function(model){
				model.save({'selected': checked });
			});
		}
		// appendHtml: function(cView, iView) {
		// 	cView.$('tbody').append(iView().render());
		// }
	});
  return FilesView;
});
