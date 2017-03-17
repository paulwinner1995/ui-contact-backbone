requirejs.config({
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'lodash': 'lib/lodash/dist/lodash.min',
        'underscore': 'lib/lodash/dist/lodash.min',
        'backbone': 'lib/backbone/backbone-min',
        'dust': 'lib/dustjs-linkedin/dist/dust-full.min'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery']
        },
        dust: {
            exports: 'dust'
        }
    }
});

requirejs(['scripts/app']);
