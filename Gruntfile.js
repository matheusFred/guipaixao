module.exports = function(grunt){
  grunt.initConfig({

	//WEB SERVICE'S CONFIG
    browserSync: {
      dev: {
          bsFiles: {
              src : ['docs/css/*.css','docs/index.html','docs/pag/*.html', 'docs/js/*.js']
          },
          options: {
            server: './docs'
          }
      }
    }  
  });
  
  //LOAD PLUGINS GRUNT
  grunt.loadNpmTasks('grunt-browser-sync');
  
  //TASK FOR DEV AND TESTE
  grunt.registerTask('default', [ 'browserSync']);
};