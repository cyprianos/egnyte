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
		initialize: function() {
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
			'click input': 'selectAll'
		},
		selectAll: function() {
			// console.log('all',arguments, this.collection);
			// _.each(this.collection, function(item) {
			// 	item.set('enable');
			// });
		},
		deselect: function() {

		}
		// appendHtml: function(cView, iView) {
		// 	cView.$('tbody').append(iView().render());
		// }
	});
  return FilesView;
});
