({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../../lib/jquery-1.9.1',
        underscore: '../../lib/underscore-1.4.4',
        backbone: '../../lib/backbone-0.9.10',
        URIjs: '../../lib/URIjs',
        zip: '../../lib/zip',
        zipfs: '../../lib/zip-fs',
        'cfi_module': '../../epub-cfi/min/cfi_module.min',
        'epub_fetch_module': '../../epub-fetch/min/epub_fetch_module.min',
        'epub_parser_module': '../../epub-parser/min/epub_parser_module.min',
        'epub_module': '../../epub/min/epub_module.min',
        'epub_reader_module': '../../epub-reader/min/epub_reader_module.min',
        'epub_reflowable_module': '../../epub-reflowable/min/epub_reflowable_module.min',
        'epub_fixed_module': '../../epub-fixed/min/epub_fixed_module.min',
        'epub_reading_system': '../../epub-ers/src/epub_reading_system'
    },
    exclude: ['jquery', 'underscore', 'backbone', 'URIjs/URI', 'zip', 'zipfs']
})
