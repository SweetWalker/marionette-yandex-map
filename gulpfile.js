var  gulp = require('gulp'),

		webpack = require('webpack'),
		gulppack = require('gulp-webpack'),
		gls = require('gulp-live-server'),

		hbs = require('gulp-handlebars'),
		wrap = require('gulp-wrap'),
		declare = require('gulp-declare'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		clean = require('gulp-clean'),

		less = require('gulp-less'),
		minifyCSS = require('gulp-minify-css'),
		prefixer = require('gulp-autoprefixer');

gulp.task('hbs', function() {
	return gulp.src('src/hbs/**/*.hbs')
		.pipe(hbs({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'Hub.templates',
			noRedeclare: true,
			processName: function(filePath) {
        return declare.processNameByPath(filePath.replace('src/hbs/', ''));
      }
		}))
		.pipe(uglify({
			mangle: true
		}))
		.pipe(concat('1.js'))
		.pipe(gulp.dest('tmp'));
});

gulp.task('less', function() {
return gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(prefixer({
			browsers: ["last 2 versions"]
		}))
		.pipe(minifyCSS())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('public/dist/css'));
});

gulp.task('webpack', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(gulppack( require('./webpack.config.js'), webpack))
		.pipe(gulp.dest('tmp'));
});

gulp.task('build-bundle', ['hbs', 'webpack'], function() {
	return gulp.src('tmp/*.js')
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('public/dist/js'));
});

gulp.task('copy-vendor', ['build-bundle'], function() {
	[
		'src/vendor/*.js',
		'bower_components/underscore/underscore-min.js',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/json2-js/json2.js',
		'bower_components/backbone/backbone-min.js',
		'bower_components/backbone.wreqr/lib/backbone.wreqr.min.js',
		'bower_components/backbone.babysitter/lib/backbone.babysitter.min.js',
		'bower_components/backbone.marionette/lib/backbone.marionette.min.js',
		'bower_components/handlebars/handlebars.runtime.min.js'
	].map(function(path) {
		gulp.src(path).pipe(gulp.dest('public/dist/vendor/'));
	});
});

gulp.task('clean-tmp', ['build-bundle'], function() {
	return gulp.src('tmp', {read: false})
		.pipe(clean({force:true}));
});

gulp.task('watch', function() {
	var server = gls.static(['public']);
	server.start();
	gulp.watch('src/hbs/**/*.hbs', ['build']);
	gulp.watch('src/js/**/*.js', ['build']);
	gulp.watch('src/less/*.less', ['less']);
	gulp.watch(['public/dist/css/*.css', 'public/dist/js/*.js'], function(file) {
		server.notify.apply(server, [file]);
	});
});

gulp.task('build', ['build-bundle', 'clean-tmp']);
gulp.task('default', ['hbs', 'less', 'webpack', 'build-bundle', 'copy-vendor', 'clean-tmp', 'watch']);
