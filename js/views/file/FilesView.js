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
		childView: FileView
		// appendHtml: function(cView, iView) {
		// 	cView.$('tbody').append(iView().render());
		// }
	});
  return FilesView;
});
