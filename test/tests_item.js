
describe('Item_REST', function() {
    describe('Searching', function() {
        it('should return 200 and list of items when tags are matches with GET /search/<loc>/<tags>');
        it('should return 200 and list of items when loc is given but no tags with GET /search/<loc>');
        it('should return 204 and return no item when tags not matching with GET /search/<loc>/<tags>.');

        it('should return 400 when no loc are passed with GET /search/<loc>/<tags>');
        it('should return 400 when more than 10 tags passed with GET /search/<loc>/<tags>');
    }),

    describe('Viewing', function() {
        it('should return 200 and acquire limitted information about an item with GET /view/<id>');

        it('should reutnr 404 if id is wrong with GET /view/<id>');
    }),

    describe('Downloading', function() {
        it('should return 200 and acquire all information about an item with GET /download/<id>');

        it('should return 404 if id is wrong with GET /download/<id>');
    }),

    describe('Uploading', function(){
        it('should return 201 and return created item ID with POST /upload/<data>');

        it('should return 200 after updating new price to item with PUT /upload/price/<id>/<new price>');
        it('should return 200 after updating new tag to item with PUT /upload/tag/<id>/<new tag>');
        it('should return 200 after updating new image to item with PUT /upload/image/<id>/<new image link>');
        
    }),

    describe('Suggesting', function(){ 
        it('should return 201 and return list of suggested tags after suggest a new tag to an item with POST /suggest/tag/<id>/<tag>');
        it('should return 201 and return list of suggested prices after suggest a new price to an item with POST /suggest/price/<id>/<price>');
        it('should return 201 and return list of suggested picture URL after suggest a new picture URL to an item with POST /suggest/picture/<id>/<picture URL>');
        
        it('should return 404 if id cannot match an item with POST /suggest/tag/<id>/<tag>');
        it('should return 400 if suggest a tag that was existed in item with POST /suggest/tag/<id>/<tag>');
        it('should return 404 if id cannot match an item with POST /suggest/price/<id>/<price>');
        it('should return 400 if suggest a price that was existed in item with POST /suggest/price/<id>/<price>');
        it('should return 404 if id cannot match an item with POST /suggest/picture/<id>/<picture>');
        it('should return 400 if suggest a picture U that was existed in item with POST /suggest/picture U/<id>/<picture U>');
    });

    describe('Voting', function(){
        it('should return 200 and total vote number after vote a tag which existed with PUT /vote/tag/<id>/<tag>');
        it('should return 200 and total vote number after vote a price which existed with PUT /vote/price/<id>/<price>');
        it('should return 200 and total vote number after vote a picture which existed with PUT /vote/price/<id>/<picture URL>');

        it('should return 404 if id cannot match an item with PUT /vote/tag/<id>/<tag>');
        it('should return 404 if tag does not match the item existing tag with PUT /vote/tag/<id>/<tag>');
        it('should return 404 if id cannot match an item with PUT /vote/price/<id>/<price>');
        it('should return 404 if tag does not match the item existing price with PUT /vote/price/<id>/<price>');
        it('should return 404 if id cannot match an item with PUT /vote/picture/<id>/<picture URL>');
        it('should return 404 if tag does not match the item existing picture URL with PUT /vote/picture/<id>/<picture URL>');
    })
});