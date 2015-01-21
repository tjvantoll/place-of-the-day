var gulp = require( "gulp" ),
	jshint = require( "gulp-jshint" );

gulp.task( "default", function() {

});

gulp.task( "lint", function() {
	return gulp.src( "app/js/**/*.js" )
		.pipe( jshint() )
		.pipe( jshint.reporter( "default" ) );
});