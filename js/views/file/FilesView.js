define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/file/FilesTemplate.html'
], function($, _, Backbone, tpl){
	var FilesView = Backbone.View.extend({
		el: $('#filesview'),
		// events: {
		// 	'click': 'click'
		// },
		// click: function() {
		// 	console.log('asdasd');
		// },
		render: function() {
			console.log(tpl);
			this.$el.html(tpl);
			console.log(this.el);
			console.log(this);
			$("#filesview").append(this.$el);
			return this; 
		}
	});
  return FilesView;
});
