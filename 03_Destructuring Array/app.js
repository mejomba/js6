const myArr = ['first', 'second', 3];

// const item1 = myArr[0];
// const item2 = myArr[1];

// console.log(item1);
// console.log(item2);


// const [item1, item2, item3] = myArr;
// console.log(item1);
// console.log(item2);
// console.log(item3);
const [...arrCopy] = myArr;
console.log(arrCopy);