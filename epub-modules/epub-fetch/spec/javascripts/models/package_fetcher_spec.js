describe('Test package fetcher', function() {

    var packageDocumentUrl = '/api/book/opf';

    describe('Test fetch package', function () {

        it('should return document object', function () {
            var PackageFetcher = require('models/package_fetcher'),
                $ = require('jquery'),
                flag = false,
                packageFetcher, server, callback, result;

            packageFetcher = new PackageFetcher({packageDocumentURL: packageDocumentUrl});

            packageFetcher.set('_packageContentType', 'application/oebps+xml');
            packageFetcher._setupResourceFetcher();

            opf = $.ajax({
                url: 'spec/javascripts/fixtures/package_document.xml',
                async: false,
                dataType: 'xml'
            }).responseText;

            server = sinon.fakeServer.create();
            server.autoRespond = true;
            server.respondWith(packageDocumentUrl, [200, {'Content-Type': 'application/oebps+xml'}, opf]);

            callback = sinon.spy(function (dom) {
                result = dom;
                flag = true;
            });

            runs(function () {
                packageFetcher.getPackageDom(callback);
            });

            waitsFor(function () {
                return flag;
            }, 'wait...', 1000);

            runs(function () {
                expect(result instanceof Document).toBe(true);
                
                var node = result.querySelector('#ean');
                expect(node instanceof Element).toBe(true);
                expect(node.textContent).toEqual('9782035862464');
            });

        });
    });
});
