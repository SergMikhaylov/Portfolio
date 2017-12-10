'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch($.config.src + '/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch($.config.src + '/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch($.config.src + '/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.src + '/img/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch($.config.src + '/fonts/**/*.*', $.gulp.series('copy:fonts'));
  });
};
