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

		ui: {
			checkboxAll: 'th input[type="checkbox"]',
			buttonNewFolder: 'button.newFolder',
			buttonRename: 'button.rename',
			buttonDelete: 'button.delete'
		},
		events: {
			'click @ui.checkboxAll': 'toggleAll'
		},
		initialize: function(options) {
			var that = this;
			var collection = this.options.collection;
			this.listenTo(collection, 'change:selected', function(){
				this.ui.checkboxAll.prop('checked', collection.isChecked());
				that.render();
			});
		},
	
		/*move to collection*/
		toggleAll: function() {
			var checked = this.ui.checkboxAll.is(':checked'),
				collection = this.options.collection;

			collection.each(function(model){
				model.save({'selected': checked });
			});
		},
		serializeData: function() {
			var collection = this.options.collection;
			return {
				selected: collection.isChecked(),
				disabled: !(collection.someChecked())
			};
		}
	});
  return FilesView;
});
