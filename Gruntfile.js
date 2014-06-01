module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.initConfig({
        csslint: {
            'options': { 'csslintrc': '.csslintrc' },
            'all': { 'src': ['app/**/*.css'] }
        },
        watch: { 'css': { 'files': ['app/**/*.css'] } },
        browserSync: {
            'options': {
                'watchTask': true,
                'server': { 'baseDir': 'app' }
            },
            'dev': {
                'bsFiles': {
                    'src': [
                        'app/**/*.html',
                        'app/**/*.css',
                        'app/**/*.js'
                    ]
                }
            }
        }
    });
    grunt.registerTask('validate', ['csslint']);
    grunt.registerTask('serve', [
        'browserSync',
        'watch'
    ]);
};