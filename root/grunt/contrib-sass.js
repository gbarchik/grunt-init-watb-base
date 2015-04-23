module.exports = function(grunt) {
	
	grunt.config('sass', {
		dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'assets/styles/build/style.css': 'assets/styles/style.scss',
				//'assets/styles/build/editor-style.css': 'assets/styles/editor-styles.scss'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
};