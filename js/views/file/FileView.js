define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'models/file/File'
], function($, _, Backbone, Marionette, File){
	var FilesView = Marionette.ItemView.extend({
		template: '#file-template',
		tagName: 'tr',
		className: 'file',
		model: File
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
