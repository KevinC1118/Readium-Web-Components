describe('Content type discover test', function () {
    var packageDocumentUrl = '/api/book/opf';

    it('head request should return "application/oebps+xml" in heade\'s content type field', function () {

        var DiscoverContentType = require('models/discover_content_type'),
            $ = require('jquery'),
            discoverContentType, contentType;

        sinon.stub($, 'ajax', function () {
            return {
                getResponseHeader: function () {
                   return 'application/oebps+xml; charset=utf-8';
                }
            };
        });

        discoverContentType = new DiscoverContentType({contentUrl: packageDocumentUrl});
        expect(discoverContentType.get('contentUrl')).toEqual(packageDocumentUrl);

        discoverContentType.identifyContentType = sinon.spy(discoverContentType.identifyContentType);

        contentType = discoverContentType.identifyContentType();
        expect(contentType).toEqual('application/oebps+xml');

        $.ajax.restore();
    });
});
