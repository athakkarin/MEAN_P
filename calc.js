function add(a,b){
    c = a+b
    console.log("add = "+c)
}

function sub(a,b){
    c = a-b
    console.log("sub = "+c);
}

var x = 1000; 

module.exports.addition = add 
module.exports.subtraction = sub  
module.exports.x = x 