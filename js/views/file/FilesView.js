define([
  'jquery',
  'underscore',
  'backbone',
  'views/file/FileView'
], function($, _, Backbone, FileView){
	var FilesView = Backbone.Marionette.CompositeView.extend({
		tagName: 'table',
		id: "files",
		template: '#files-template',
		itemView: FileView,
		appendHtml: function(cView, iView) {
			cView.$('tbody').append(iView.el);
		}
		// events: {
		// 	'click': 'click'
		// },
		// click: function() {
		// 	console.log('asdasd');
		// },
		// render: function() {
		// 	this.$el.append(tpl);
		// }
	});
  return FilesView;
});
