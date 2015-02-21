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
    			'app/css/style.css': 'app/css/style.scss'
    		}
    	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
}
