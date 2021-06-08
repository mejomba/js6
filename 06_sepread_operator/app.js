arr1 = [1, 2, 4];
// arr2 = arr1;
arr2 = [...arr1];

arr1.push(5);

console.log(arr1);
console.log(arr2);