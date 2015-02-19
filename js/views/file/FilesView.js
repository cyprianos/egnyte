define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/file/FilesTemplate.html',
   'layoutmanager'
], function($, _, Backbone, tpl, LayoutManager){
	var FilesView = Backbone.View.extend({
		template: '#tpl-list'
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
