// Q20.
// Write a Python program to combine two object 
// adding values for common keys.
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// Sample output: Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})

let o1 = {'a': 100, 'b': 200, 'c':300}
let o2 = {'a': 300, 'b': 200, 'd':400}
var i=0;
for (i in o1){
    if(i in o2){
        o2[i]=o2[i]+o1[i]
    }
    else{
        o2[i]=o1[i]
        
    }
}
console.log(o2);