class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle {
    constructor(sideLength1, sideLength2, sideLength3) {
        this.sideLength1 = sideLength1;
        this.sideLength2 = sideLength2;
        this.sideLength3 = sideLength3;
    }

    getSideLength1() {
        return this.sideLength1;
    }
    getSideLength2() {
        return this.sideLength2;
    }
    getSideLength3() {
        return this.sideLength3;
    }

    isTriangle() {
        if ((this.sideLength1 + this.sideLength2) > this.sideLength3)
        {
            return true;
        }
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}

let testTriangle = new Triangle(1,2,3);
let testIsTriangle = testTriangle.isTriangle();

console.log(testIsTriangle);