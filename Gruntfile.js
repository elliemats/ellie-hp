module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  require("load-grunt-tasks")(grunt); 

  grunt.initConfig({
    watch : {
      options : {
        livereload : true
      },
      client : {
        files : [
          'static/**/*.js',
          'static/**/*.html'
        ],
        tasks : [
          'webpack:dev'
        ]
      },
      styles : {
        files : [
          'static/**/*.scss'
        ],
        tasks : [
          'sass:dev'
        ]
      },
      server : {
        files : [
          'server/**/*.js'
        ],
        tasks : [
          'express:dev'
        ],
        options : {
          spawn : false
        }
      }
    },
    webpack : {
      dev : {
        entry : './static/js/script.js',
        output : {
          path : '.build/js/',
          filename : 'bundle.js'
        },
        devtool : 'source-map'
      }
    },
    express : {
      dev : {
        options : {
          script : 'server/index.js'
        }
      }
    },
    open : {
      dev : {
        path: 'http://localhost:3000/'
      }
    },

    sass : {
      options : {
        sourceMap : false
      },
      dev : {
        files : {
          '.build/styles/main.css' : 'static/scss/main.scss'
        }
      }
    },
  });

  grunt.registerTask('serve', [
    'webpack:dev',
    'sass:dev',
    'express:dev',
    'open:dev',
    'watch'
  ]);

}
