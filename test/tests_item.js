
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

    describe('Upload', function(){
        it('should return 201 and return created item ID with POST /upload/<data>');

        it('should return 200 after updating new price to item with PUT /upload/price/<id>/<new price>');
        it('should return 200 after updating new tag to item with PUT /upload/tag/<id>/<new tag>');
        it('should return 200 after updating new image to item with PUT /upload/image/<id>/<new image link>');
        
    }),

    describe('Voting', function(){
        
    })
});