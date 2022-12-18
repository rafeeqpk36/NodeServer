
var rect= require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle with l= " +l + " and b= "+b);
    rect(l,b,(err,rectangle) => {if(err){
        console.log("Error: " + err.message)
    }
else {
    console.log("Area of the rectangle is = " + rectangle.area());
    console.log("Perimeter of Rectangle is = "+ rectangle.perimeter())
}})
console.log("this statement is after the call to rect()")  

}

solveRect(2,5)
solveRect(10.5,10)
solveRect(0,9)
solveRect(-9,8)
solveRect(-8,-7)
