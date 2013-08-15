'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                globalstrict: true,
                browser: true,
                devel: true,
                globals: {
                    module: true,
                    require: true,
                    define: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src_test: {
                src: ['src/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.libTest.src %>',
                tasks: ['jshint:libTest', 'nodeunit']
            }
        },
        connect: {
            test: {
                options: {
                    port: 8888,
                    base: '../'
                }
            }
        },
        jasmine: {
            test: {
                src: "src/models/**/*.js",
                options: {
                    specs: 'spec/javascripts/models/**/*.js',
                    host: 'http://localhost:8888/epub-fetch/',
                    vendor: [
                        '../lib/sinon-1.7.3.js'
                    ],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: 'build.js',
                        requireConfig: {
                            baseUrl: 'src'
                        }
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // aliase.
    grunt.registerTask('test', ['jshint', 'connect:test', 'jasmine:test']);

    // Default task.
    grunt.registerTask('default', ['jshint', 'nodeunit']);

};
