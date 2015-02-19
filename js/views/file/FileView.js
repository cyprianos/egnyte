define([
  'jquery',
  'underscore',
  'backbone',
   'layoutmanager'
], function($, _, Backbone, tpl, LayoutManager){
	var FilesView = Backbone.View.extend({
		tag: 'li'
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
