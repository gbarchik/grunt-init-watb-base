module.exports = function(grunt) {
	
	grunt.config('cssmin', {
		options: {
			keepSpecialComments: 1
		},
		minify: {
			expand: true,
			cwd: 'assets/styles/build',
			src: ['*.css', '!*.min.css'],
			dest: 'assets/styles/build',
			ext: '.min.css'
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};