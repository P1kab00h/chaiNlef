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
    it('1. Check we get the 3 sides length', function(done) {
        let triangle1 = new Triangle(5, 4, 3);
        expect(triangle1.getSideLength1()).to.equal(5);
        expect(triangle1.getSideLength2()).to.equal(4);
        expect(triangle1.getSideLength3()).to.equal(3);
        done();
    });
    it(`2. Check if it's a triangle`, function(done) {
        let triangle2 = new Triangle(4, 6, 8);
        expect(triangle2.isTriangle()).to.equal(true);
        done();
    });
    it(`3. Check if it's NOT a triangle`, function(done) {
        let triangle3 = new Triangle(1, 2, 3);
        expect(triangle3.isTriangle()).to.equal(false);
        done();
    });
    it(`4. Check the surface math for triangle`, function(done) {
        let triangle4 = new Triangle(4, 5, 3);
        expect(triangle4.getSurfaceArea()).to.equal(6);
        done();
    });

    it(`5. Check if it's a rectangle triangle`, function(done) {
        let triangle5 = new Triangle(5, 3, 3);
        expect(triangle5.isRectangle()).to.equal(true);
        done();
    });
    it(`6. Check if it's NOT a rectangle triangle`, function(done) {
        let triangle6 = new Triangle(1, 2, 3);
        expect(triangle6.isRectangle()).to.equal(false);
        done();
    });
    it(`7. Check if it's an equilateral triangle`, function(done) {
        let triangle7 = new Triangle(3, 3, 3);
        expect(triangle7.isEquilateral()).to.equal(true);
        done();
    });
    it(`8. Check if it's NOT an equilateral triangle`, function(done) {
        let triangle8 = new Triangle(4, 3, 6);
        expect(triangle8.isEquilateral()).to.equal(false);
        done();
    });
    it(`9. Check if it's an isocele triangle`, function(done) {
        let triangle9 = new Triangle(4, 4, 6);
        expect(triangle9.isIsocele()).to.equal(true);
        done();
    });
    it(`10. Check if it's NOT an isocele triangle`, function(done) {
        let triangle9 = new Triangle(4, 6, 4);
        expect(triangle9.isIsocele()).to.equal(false);
        done();
    });
});    
