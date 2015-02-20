define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'
], function($, _, Backbone, Marionette){
	var FilesView = Marionette.ItemView.extend({
		template: '#file-template',
		tagName: 'tr',
		className: 'file'
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
