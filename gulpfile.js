// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// SASS
function compilaSass() {
    return gulp
        .src('_source/css/cChatBot.scss')
        .pipe(concat('cChatBot.min.css'))
        .pipe(
            sass({
                outputStyle: 'compressed',
            }),
        )
        .pipe(
            autoprefixer({
                cascade: false,
            }),
        )
        .pipe(gulp.dest('dist/'));
}
gulp.task('sass', function (done) {
  compilaSass();
  done();
});

// JS
function gulpJS() {
    return gulp
        .src([
            'node_modules/imask/dist/imask.js',

            '_source/js/components/cChatbotCall.js',
            '_source/js/components/cChatbotMask.js',
            '_source/js/components/cChatbot.js',
            '_source/js/components/cChatbotHeader.js',
            '_source/js/components/cChatbotHero.js',

            '_source/js/components/cListOptions__primary.js',
            '_source/js/components/cListOptions__secondary.js',

            '_source/js/components/cForm__feedbacks.js',

            '_source/js/components/cForm__hiddenFields.js',
            '_source/js/components/cForm__checkMinPrice.js',
            '_source/js/components/cForm__comprarAgora.js',
            '_source/js/components/cForm__sellerContacts.js',
            '_source/js/components/cForm__techSupport.js',

            '_source/js/components/cSignSignup.js',
            '_source/js/components/cDuplicateTicket.js',

            '_source/js/createElements.js',
            '_source/js/navigation.js',

            '_source/js/form__validations.js',
            '_source/js/form__rdStation___keys.js',
            '_source/js/form__rdStation__comprarAgora.js',
            '_source/js/form__rdStation__techSupport.js',
            '_source/js/form__checkMinPrice.js'
        ])
        .pipe(concat('cChatBot.min.js'))
        .pipe(
            babel({
                presets: ['@babel/preset-env'],
            }),
        )
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
}
gulp.task('mainjs', gulpJS);

// WATCH
function watch() {
  gulp.watch('_source/css/**/*.scss', compilaSass);
  gulp.watch('_source/js/**/*.js', gulpJS);
}
gulp.task('watch', watch);

// DEFAULT
gulp.task(
  'default',
  gulp.parallel('watch', 'sass', 'mainjs'),
);
