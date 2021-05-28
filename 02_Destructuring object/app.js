const myobj = {
    firstName: 'mojtaba',
    lastName: 'aminzadeh',
    city: 'rudsar',
    zipCode: 4481718
}

// normal 
const fn = myobj.firstName;
const ln = myobj.lastName;
console.log(fn);
console.log(ln);

// ES6
const {fn: firstName, ln: lastName} = myobj
console.log(fn);
console.log(ln);
