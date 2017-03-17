requirejs.config({
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'lodash': 'lib/lodash/dist/lodash.min',
        'underscore': 'lib/lodash/dist/lodash.min',
        'backbone': 'lib/backbone/backbone-min'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery']
        }
    }
});

requirejs(['scripts/app']);
