let x = []

x.push(11)
x.push(22)
x.push(33)
x.push(44)
x.push(55)

console.log(x);

console.log(x[0]);

console.log("\nElements in Array\n");
for(let i=0;i<x.length;i++){
    console.log(x[i]+" ");
}

x.pop() // Last 

console.log(x);

//remove 33 

// let dummy = [] 
// for(let i =0;i<x.length;i++){ // 11 22 33 44 
//     if(x[i] != 33){
//         dummy.push(x[i])  // 11 22 44  
//     }
// }
// x = dummy 
// console.log(x);


//remove 33 

// dummy = []
// x.map( data =>{
//     if(data != 33 ){
//         dummy.push(data)
//     }
// })
// console.log(dummy);


//remove 33 

x = x.filter(data => data != 33)
console.log(x);