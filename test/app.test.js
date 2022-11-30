const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;

const expect = require('chai').expect;



describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. Check the 3 sides length', function(done) {
        let triangle1 = new Triangle(5, 4, 3);
        expect(triangle1.getSideLength1()).to.equal(5);
        expect(triangle1.getSideLength2()).to.equal(4);
        expect(triangle1.getSideLength3()).to.equal(3);
        done();
    });
    it(`2. Check if it's a triangle`, function(done) {
        let triangle2 = new Triangle(1, 2, 3);
        expect(triangle2.isTriangle()).to.equal(true);
        done();
    });     


});