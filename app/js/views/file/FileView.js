define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'models/file/File'
], function($, _, Backbone, Marionette, File){
	var FilesView = Marionette.ItemView.extend({
		initialize: function() {
			this.listenTo(this.options.model, 'change:selected', this.fieldsChanged);
		},
		template: '#file-template',
		tagName: 'tr',
		className: 'file',
		model: File,
		events: {
			'click input': 'select',
		},
		select: function() {
			this.model.toggle();
		},
		fieldsChanged: function() {
			this.render();
		}
		// click: function() {
		// 	console.log('asdasd');
		// },
		// render: function() {
		// 	this.$el.append(tpl);
		// }
	});
  return FilesView;
});
