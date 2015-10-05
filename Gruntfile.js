module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true,
          bundleExec: true,
          debugInfo: true
        },
        files: {
          'stylesheets/dist/stylesheet.min.css': 'stylesheets/scss/stylesheet.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['stylesheets/scss/**/*.scss', 'Grunfile.js', 'stylesheets/scss/*.scss'],
        tasks: ['sass']
      },
      options: {
        livereload: true,
        debounceDelay: 10000
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('sass-process', ['sass']);
  grunt.registerTask('default', ['watch']);
}
