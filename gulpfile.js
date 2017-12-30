import gulp from 'gulp';
import gls from 'gulp-live-server';
import typescript from 'gulp-tsc';
import webpack from 'webpack-stream';

const OUT_FOLDER = 'lib';
const DOCBASE = `${OUT_FOLDER}/docbase`;

/******************************************************************************
 * COMPILE STEPS
 ******************************************************************************/

gulp.task('compile:html', () => {
  gulp.src('src/pages/*.html').pipe(gulp.dest(DOCBASE));
});

gulp.task('compile:tsc', () => {
  gulp.src(['src/**/*.ts', 'src/**/*.tsx'])
    .pipe(typescript({ 
      jsx: 'react',
      lib: [ 'DOM', 'ES2016' ]
    }))
    .pipe(gulp.dest(OUT_FOLDER));
});

gulp.task('compile:webpack', () => {
  gulp.src('lib/index.js')
    .pipe(webpack(require('./webpack.config.js').default))
    .pipe(gulp.dest(DOCBASE));

  gulp.src('lib/webmail.js')
    .pipe(webpack(require('./webpack.config.js').webmail))
    .pipe(gulp.dest(DOCBASE));
});


gulp.task('compile', [ 'compile:html', 'compile:tsc', 'compile:webpack' ]);


/******************************************************************************
 * OTHER STEPS
 ******************************************************************************/

gulp.task('run:server', () => {
  const SERVER_PATH = './lib/server/server.js';
  let server = gls.new(SERVER_PATH);
  server.start();

  gulp.watch(SERVER_PATH, () => { 
    server.stop();
    server = gls.new(SERVER_PATH);
    server.start();
  });
});

gulp.task('run', ['run:server']);


gulp.task('watch', function() {
  gulp.watch(['src/**/*.ts', 'src/**/*.tsx'], [ 'compile:tsc' ]);
  gulp.watch('src/pages/*.html', [ 'compile:html' ]);
  gulp.watch(['lib/index.js', 'src/sass/*.scss'], [ 'compile:webpack' ])
});

gulp.task('default', ['compile', 'run', 'watch']);
