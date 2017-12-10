'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    var spriteData = $.gulp.src($.config.src + '/img/sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'css',
        imgPath: '../img/sprite.png',
        padding: 50
      }));

    spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img'));
    spriteData.css.pipe($.gulp.dest($.config.src + '/style/common'));
    
    return spriteData;
  })
};