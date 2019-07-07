let a = +prompt('Enter a length of "A":');
let b = +prompt('Enter a length of "B":');
let c = +prompt('Enter a length of "C":');
console.log(a,b,c)
if(a <= 0 || b <= 0 || c <= 0 || a + b < c || a + c < b || c + b < a || isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('Triangle doesn’t exist');
}else if(a === b && b === c){
    console.log('Eequivalent triangle');
}else if(a === b && a!== c || b === c && c !== a || a === c && c !== b){
    console.log('Isosceles triangle');
}else{
    console.log('Normal triangle');
}

