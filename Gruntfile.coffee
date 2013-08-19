#global module:false

MODULES = [
    'epub-cfi'
    'epub-ers'
    'epub-fetch'
    'epub-fixed'
    'epub-parser'
    'epub-reader'
    'epub-reflowable'
    'epub'
]

module.exports = (grunt) ->

    # Task configuration.
    grunt.initConfig
        clean:
            amd: ['epub-modules/release/amd']
        copy:
            amd_files:
                files: ( (modules) ->
                    list = []

                    for m in modules
                        list.push
                            expand: true
                            flatten: true
                            filter: 'isFile'
                            cwd: 'epub-modules'
                            src: "#{m}/min/*.min.js"
                            dest: "epub-modules/release/amd/#{m}"

                    return list
                )(MODULES)

    # These plugins provide necessary tasks.
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-clean'

    # Default task.
    grunt.registerTask "default", []

    grunt.registerTask "amd-copy", ['clean:amd', 'copy:amd_files']
