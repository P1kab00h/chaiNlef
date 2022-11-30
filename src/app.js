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

    // Vérifier si il s'agit bien d'un triangle ==> refacto on devrait vérifier dans tous les cas qu'il s'agit d'un trianlge avant tout autre traitement ...
    isTriangle() {
        if (((this.sideLength1 + this.sideLength2) > this.sideLength3) &&
        ((this.sideLength2 + this.sideLength3) > this.sideLength1) && 
        ((this.sideLength3 + this.sideLength1) > this.sideLength2))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getSurfaceArea() 
    {
        var s = (this.sideLength1 + this.sideLength2 + this.sideLength3)/2
        var surface = Math.sqrt(s*((s-this.sideLength1)*(s-this.sideLength2)*(s-this.sideLength3)))
        // arrondir à deux chiffres après la virgule
        return Math.round(surface * 100)/100
    }

    isRectangle()
    {
        const sin123 = this.sideLength2 / this.sideLength3; // 0.55
        const sin231 = this.sideLength1 / this.sideLength2; // 0.8
        const TotalTriangle = (Math.asin(sin123) * 180/Math.PI) + (Math.asin(sin231) * 180/Math.PI);
        if((TotalTriangle-180)<90)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    isEquilateral() 
    {
        if ((this.sideLength1==this.sideLength2) && (this.sideLength1==this.sideLength3))
            return true
        else
        {
            return false
        }
    }

    isIsocele(){
        if((this.sideLength1 == this.sideLength2) && (this.sideLength1 != this.sideLength3) && (this.sideLength2 != this.sideLength3))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

module.exports = {
    Cube:Cube,
    Triangle:Triangle
}




let testTriangle = new Triangle(4, 4, 6);
//let testIsTriangle = testTriangle.isTriangle();
//let testSurfaceArea = testTriangle.getSurfaceArea();
let testIsIsocele = testTriangle.isIsocele();
console.log(testIsIsocele);
