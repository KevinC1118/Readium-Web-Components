({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        zipfs: ['zip']
    },
    paths: {
        jquery: '../../lib/jquery-1.9.1',
        underscore: '../../lib/underscore-1.4.4',
        backbone: '../../lib/backbone-0.9.10',
        URIjs: '../../lib/URIjs',
        zipfs: '../../lib/zip-fs',
        zip: '../../lib/zip'
    },
    exclude: ['jquery', 'underscore', 'backbone', 'URIjs/URI', 'zipfs', 'zip']
})
