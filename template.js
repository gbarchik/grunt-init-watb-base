/*
 * grunt-init-watb-base
 * https://watb.co/
 *
 * Copyright (c) 2015 Guilherme Barchik
 * Licensed under the MIT license.
 */

'use strict';

// Description
exports.description = 'Create a Front-End Web Site Project.';

// Message on prompt - Before
exports.notes = '';

// Message on prompt - After
exports.after = '';

// Initial template
exports.template = function(grunt, init, done) {
	
	init.process({type : 'watb'}, [
		
		// Prompt for values
		init.prompt('name'),
		init.prompt('description'),
		init.prompt('version'),
		init.prompt('author_name'),
		init.prompt('author_email')
		
	], function(err, props) {
		
		props.watbjson = props.name + '.watb.json';
		
		var files = init.filesToCopy(props);
		init.copyAndProcess(files, props);
		
		// Generate package.json
		init.writePackageJSON('package.json', {
			name: 'watb-site',
			version: '0.0.1',
			node_version: '>= 0.12.2',
			devDependencies: {
				'grunt-autoprefixer': '~3.0.0',
				'grunt-contrib-cssmin': '~0.12.2',
				'grunt-contrib-imagemin': '~0.9.4',
				'grunt-contrib-jshint': '~0.11.2',
				'grunt-contrib-sass': '~0.9.2',
				'grunt-contrib-uglify': '~0.9.1',
				'grunt-contrib-watch': '~0.6.1',
				'grunt-browser-sync' : '~2.1.1'
			}
		});
		
		done();
		
	});
	
};