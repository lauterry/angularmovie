module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            dist: ['.tmp', 'dist']
        },
        copy: {
            dist: {
                files: {
                    'dist/': ['app/index.html', 'app/img/**', 'app/css/**']
                }
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '*.js',
                    dest: '.tmp/concat/js'
                }]
            }
        },
        useminPrepare: {
            html: 'app/index.html'
        },
        usemin: {
            html: 'dist/app/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['clean', 'copy', 'useminPrepare', 'concat', 'ngmin', 'uglify', 'usemin' ]);

};