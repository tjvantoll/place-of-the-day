var gulp = require( "gulp" ),
	jshint = require( "gulp-jshint" ),
	csslint = require( "gulp-csslint" ),
	jscs = require( "gulp-jscs" );

gulp.task( "jshint", function() {
	return gulp.src( "app/js/**/*.js" )
		.pipe( jshint() )
		.pipe( jshint.reporter() );
});

gulp.task( "csslint", function() {
	gulp.src( "app/css/*.css" )
		.pipe( csslint() )
		.pipe( csslint.reporter() );
});

gulp.task( "jscs", function() {
	gulp.src( "app/js/**/*.js" )
		.pipe( jscs() )
});

gulp.task( "default", [ "jshint", "csslint", "jscs" ]);
