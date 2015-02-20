define(['jquery',
	'underscore',
	'backbone',
	'models/file/File'

], function($, _, Backbone, File){
	var FilesList = Backbone.Collection.extend({
		model: File
	});
	return FilesList;
});