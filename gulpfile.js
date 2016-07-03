var devConfig = require('./dev.config.json');

var gulp = require('gulp');

var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix();
var minifyCss = require('gulp-minify-css');

var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var bulkify = require('bulkify');

var connect = require('gulp-connect');
var clean = require('gulp-clean');

var paths = {
    src: {
        js: ['src/js/**/*.js', 'src/js/**/*.json'],
        jsMain: 'src/js/main.js',

        styles: 'src/styles/**/*.less',
        stylesMain: 'src/styles/main.less',

        indexHtml: 'src/index.html',

        views: 'src/views/**/*.html',

        assets: 'src/assets/**/*.*',
        vendor: 'src/vendor/**/*.*'
    },

    build: {
        index: 'build',
        js: 'build/js',
        css: 'build/css',
        assets: 'build/assets',
        vendor: 'build/vendor',
        views: 'build/views'
    }
};


// Build Tasks
gulp.task('build-js', ['clean-js'], function () {
    browserify(paths.src.jsMain)
        .transform(bulkify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.build.js))
        .pipe(connect.reload());
});

gulp.task('build-js:minify', ['clean-js'], function () {
    browserify(paths.src.jsMain)
        .transform(bulkify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.build.js))
        .pipe(connect.reload());
});

gulp.task('build-styles', ['clean-styles'], function () {
    return gulp.src(paths.src.stylesMain)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest(paths.build.css))
        .pipe(connect.reload());
});

gulp.task('build-styles:minify', ['clean-styles'], function () {
    return gulp.src(paths.src.stylesMain)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(paths.build.css))
        .pipe(connect.reload());
});

gulp.task('build-indexHtml', function () {
    return gulp.src(paths.src.indexHtml)
        .pipe(gulp.dest(paths.build.index))
        .pipe(connect.reload());
});

gulp.task('build-views', ['clean-views'], function () {
    return gulp.src(paths.src.views)
        .pipe(gulp.dest(paths.build.views))
        .pipe(connect.reload());
});

gulp.task('build-vendor', ['clean-vendor'], function () {
    return gulp.src(paths.src.vendor)
        .pipe(gulp.dest(paths.build.vendor))
        .pipe(connect.reload());
});

gulp.task('build-assets', ['clean-assets'], function () {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.build.assets))
        .pipe(connect.reload());
});



gulp.task('clean-js', function () {
    return gulp.src(paths.build.js)
        .pipe(clean());
});

gulp.task('clean-styles', function () {
    return gulp.src(paths.build.css)
        .pipe(clean());
});

gulp.task('clean-views', function () {
    return gulp.src(paths.build.views)
        .pipe(clean());
});

gulp.task('clean-vendor', function () {
    return gulp.src(paths.build.vendor)
        .pipe(clean());
});

gulp.task('clean-assets', function () {
    return gulp.src(paths.build.assets)
        .pipe(clean());
});


// Watch Tasks
gulp.task('watch', function () {
    gulp.watch([paths.src.js], ['build-js']);
    gulp.watch([paths.src.styles], ['build-styles']);
    gulp.watch([paths.src.indexHtml], ['build-indexHtml']);
    gulp.watch([paths.src.views], ['build-views']);
    gulp.watch([paths.src.vendor], ['build-vendor']);
    gulp.watch([paths.src.assets], ['build-assets']);
});


// Connect
gulp.task('connect', function () {
    connect.server({
        root: [paths.build.index + '/'],
        livereload: true,
        port: devConfig.devServer.port,
        fallback: paths.build.index + '/index.html'
    });
});


gulp.task('build', ['build-js', 'build-styles', 'build-indexHtml', 'build-views', 'build-vendor', 'build-assets']);
gulp.task('build:production', ['build-js:minify', 'build-styles:minify', 'build-indexHtml', 'build-views', 'build-vendor', 'build-assets']);
gulp.task('default', ['build', 'connect', 'watch']);
