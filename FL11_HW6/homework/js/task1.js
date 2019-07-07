let a1 = +prompt('Please, enter A[x] = ');
let a2 = +prompt('Please, enter A[y] = ');
let b1 = +prompt('Please, enter B[x] = ');
let b2 = +prompt('Please, enter B[y] = ');
let c1 = +prompt('Please, enter C[x] = ');
let c2 = +prompt('Please, enter C[y] = ');
const extraVar = 2;
(a1 + b1) / extraVar === c1 && (a2 + b2) / extraVar === c2 ? console.log(true) : console.log(false);