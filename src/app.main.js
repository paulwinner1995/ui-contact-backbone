requirejs.config({
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'lodash': 'lib/lodash/dist/lodash.min',
        'backbone': 'lib/backbone/backbone-min',
        'dust': 'lib/dustjs-linkedin/dist/dust-full.min',
        'text': 'lib/text/text'
    },

    shim: {
        backbone: { deps: ['jquery']},
        dust: { exports: 'dust'}
    },

    map : {
        '*': {
            'underscore': 'lodash'
        }
    }
});

define.amd.dust = true;

requirejs(['scripts/app']);
