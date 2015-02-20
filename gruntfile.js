/*TODO
sass/
requirejs compilation
concat/ugliyfy
add express.js server
*/

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
    	dist: {
    		files: {
    			'css/style.css': 'css/style.scss'
    		}
    	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
}




