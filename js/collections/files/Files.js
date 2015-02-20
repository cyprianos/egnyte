define(['jquery',
	'underscore',
	'backbone',
	'localstorage',
	'models/file/File'

], function($, _, Backbone, LocalStorage, File){
	var FilesList = Backbone.Collection.extend({
		model: File,
		localStorage: new Backbone.LocalStorage('files'),
		isChecked: function() {
			var c = _.invoke(this.filter(function(){return true}), 'get', 'selected');
			return _.every(c, _.identity);
		}
	});
	return FilesList;
});