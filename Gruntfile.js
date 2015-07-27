'use strict';

var
    LIVERELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /templates\//
                },
                files: {
                  "js/dist/templates.js": "**/*.hbs"
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['stylus/'],
                    import: ['../variables']
                },
                files: {
                    'css/style.css' : 'css/stylus/*.styl',
                }
            }
        },
        uglify: {
          my_target: {
            files: {
              "js/dist/app.js":  ["js/src/application.js","js/src/router.js","js/src/routes/*","js/src/models/*","js/src/views/*","js/src/controllers/*","js/src/components/*","js/src/fixtures/*"]
            }
          }
        },
        watch: {
            files: [
                'index.html',
                'js/**/*.js',
                'bower_components'
            ],
            ember_templates: {
                files: 'templates/**/*.hbs',
                tasks: ['emberTemplates']
            },
            stylus: {
                files: ['css/**/*.styl'],
                tasks: ['stylus']
            },
            uglify: {
                files: ["js/src/application.js","js/src/router.js","js/src/routes/*","js/src/models/*","js/src/views/*","js/src/controllers/*","js/src/components/*","js/src/fixtures/*"],
                tasks: ['uglify']
            },
            livereload: {
                options: { livereload: LIVERELOAD_PORT },
                files: ['css/style.css', 'index.html', 'js/**/*.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function( connect ) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'stylus',
        'uglify',
        'emberTemplates',
        'server'
    ]);
};
