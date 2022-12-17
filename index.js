var rect= require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle with l= " +l + " and b= "+b)
    if(l<=0 || b<=0){
        console.log("Rectangle dimension should be greater than zero:l="+l+",and b="+b)
    }
    else {
        console.log("Area of the rectangle is = " + rect.area(l,b))
        console.log("Perimeter of Rectangle is = "+ rect.perimeter(l,b))
    }

}

solveRect(2,5)
solveRect(10.5,10)
solveRect(0,9)
solveRect(-9,8)
solveRect(-8,-7)
