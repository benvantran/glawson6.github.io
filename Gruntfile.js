// Generated on 2015-04-20 using generator-jekyllrb 1.4.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
// Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    // dist: 'dist'
    dist: '../dist'
  };
  grunt.initConfig({
// Project settings
    // Configurable paths
    wiredep: {

      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'app/_layouts/default.html'//,   // .html support...
         // 'app/views/**/*.jade',   // .jade support...
         // 'app/styles/main.scss',  // .scss & .sass support...
          //'app/config.yml'         // and .yml & .yaml support out of the box!
        ],

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    },
    bower: {
      install: {
        //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    },
    yeoman: {
      app: 'app',
      dist: 'dist',
      home: './'
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer:dist']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:dist']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".jekyll",
              ".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: "<%= yeoman.dist %>"
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".jekyll",
              ".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      home: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.home %>/blog',
            '<%= yeoman.home %>/css',
            '<%= yeoman.home %>/img',
            '<%= yeoman.home %>/jekyll',
            '<%= yeoman.home %>/js',
            '<%= yeoman.home %>/.htaccess',
            '<%= yeoman.home %>/404.html',
            '<%= yeoman.home %>/about.html',
            '<%= yeoman.home %>/crossdomain.xml',
            '<%= yeoman.home %>/favicon.ico',
            '<%= yeoman.home %>/humans.txt',
            '<%= yeoman.home %>/blogs.html',
            '<%= yeoman.home %>/projects.html',
            '<%= yeoman.home %>/index.html',
            '<%= yeoman.home %>/resume.html',
            '<%= yeoman.home %>/robots.txt',
            '<%= yeoman.home %>/Resume-7-page-2015.docx',
            '<%= yeoman.home %>/Resume-2pages-04-02-2015.docx'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '.tmp/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        expand: true,
        cwd: '.tmp',
        src: '**/{css,concat}/*.css',
        dest: '.tmp'
      }
    },
    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/img']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/jquery/jquery.min.js',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      home: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.dist %>',
          src: ['**/*'],
          dest: '<%= yeoman.home %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    // https://github.com/robwierzbowski/generator-jekyllrb/issues/106
    // scsslint: {
    //   // See https://www.npmjs.org/package/grunt-scss-lint for options.
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },
    concurrent: {
      server: [
        'compass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        //'multidest:copy_dist'
        'copy:dist'
      ]
    },
     auto_install: {
        local: {},
        subdir: {
          options: {
            cwd: 'subdir',
            stdout: true,
            stderr: true,
            failOnError: true,
            npm: '--production'
          }
        }
      }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:dist',
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'browserSync:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'jshint:all',
    'csslint:check'
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'autoprefixer:dist',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin',
    'copy:home'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-multi-dest');
  grunt.loadNpmTasks('grunt-auto-install');
};
