const arr = "mojtaba";
let total = 0;

// for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
// }
// console.log(total);

for (const item of arr) {

    total += item;
}
console.log(total);

for (const i in arr) {
    i
    total+= arr[i]
}
console.log(total);