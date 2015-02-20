define(['jquery',
	'underscore',
	'backbone',
	'localstorage',
	'models/file/File'

], function($, _, Backbone, LocalStorage, File){
	var FilesList = Backbone.Collection.extend({
		model: File,
		localStorage: new Backbone.LocalStorage('files')
	});
	return FilesList;
});