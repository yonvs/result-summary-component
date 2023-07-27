const gulp = require('gulp');
const sass = require('gulp-sass');

// Tâche pour la compilation de Sass
function compileSass() {
  return gulp.src('scss/styles.scss') // Remplacez 'chemin/vers/le/fichier/source.scss' par le chemin de votre fichier Sass principal.
    .pipe(sass())
    .pipe(gulp.dest('css/styles.css')); // Remplacez 'chemin/vers/le/dossier/destination' par le chemin du dossier où vous souhaitez enregistrer le fichier CSS compilé.
}

// Tâche pour surveiller les modifications des fichiers Sass
function watchFiles() {
  gulp.watch('scss/styles.scss', compileSass);
}

// Tâche par défaut (exécutée en lançant simplement "gulp" dans le terminal)
gulp.task('default', gulp.series(compileSass, watchFiles));
