module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['JS17-18/src/js/*.js'],
                dest: 'JS17-18/dist/js/script.min.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'JS17-18/dist/js/script.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'JS17-18/dist/css/style.min.css': ['JS17-18/src/css/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
