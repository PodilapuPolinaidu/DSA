let n = 8;
// function fibnoccoNumber(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   }
//   return fibnoccoNumber(n - 1) + fibnoccoNumber(n - 2);
// }

function fibnoccoNumber(n) { 
let n = 10;   
let a = 0, b = 1;

console.log(a); 
console.log(b); 

for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);

    a = b;
    b = next;
}
}
let res = fibnoccoNumber(n);
console.log(res);
