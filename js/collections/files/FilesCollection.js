define(['jquery',
	'underscore',
	'backbone',
	'model/file/FileModel'

], function($, _, Backbone, File){
	var FilesList = Backbone.Collection.extend({
		model: File
	});
	return FilesList;
});

