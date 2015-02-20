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
		// onAfterRender: function() {
			// var col = this.options.collection;
			// console.log('cccc', this.$('th input')[0]);
			
		// },
		initialize: function(options) {
			console.log(this.$el.find('th input'));

			var collection = this.options.collection;
			
			this.listenTo(collection, 'change:selected', function(){
					var checkboxAll = this.checkboxAll = this.$('th input');
					checkboxAll.prop('checked', collection.isChecked());
			});

		},
		events: {
			'click th input': 'toggleAll'
		},
		/*move to collection*/
		toggleAll: function() {
			var checked = this.$('th input').is(':checked'),
				collection = this.options.collection;

			collection.each(function(model){
				model.save({'selected': checked });
			});
		},
		serializeData: function() {
			return {
				selected:  this.options.collection.isChecked()

			};
		}
	});
  return FilesView;
});
