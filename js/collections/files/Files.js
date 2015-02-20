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
		},
		someChecked: function() {
			var c = _.invoke(this.filter(function(){return true}), 'get', 'selected');
			console.log('some',  _.some(c, _.identity));
			return _.some(c, _.identity);
		}
	});
	return FilesList;
});