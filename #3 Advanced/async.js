// synchronous

console.log(" I ");

console.log(" eat ");

console.log(" ice cream ");

console.log(" with a ");

console.log(" spoon ");

// asynchronous

console.log(" I ");

console.log(" eat ");

setTimeout(() => {
    console.log(" ice cream ");
}, 4000);

console.log(" with a ");

console.log(" spoon ");

