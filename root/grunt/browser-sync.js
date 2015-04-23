module.exports = function(grunt) {
	
	grunt.config('browserSync', {
		bsFiles: {
			src: 'assets/styles/**/**.css'
		},
		options: {
			watchTask: true,
			notify: false,
			server: {
				baseDir: './'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-browser-sync');
};