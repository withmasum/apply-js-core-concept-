/* console.log(4 / 2);
console.log(98 / 2);
console.log(144 / 2);
console.log(1286 / 2); */


/* 
console.log(7 / 2);
console.log(83 / 2);
console.log(145 / 2);
console.log(1287 / 2);
 */


/* 
console.log(4 % 2);
console.log(98 % 2);
console.log(144 % 2);
console.log(1286 % 2);


console.log(7 % 2);
console.log(83 % 2);
console.log(145 % 2);
console.log(1287 % 2);
 */




/* function isEven(number) {
    const reminder = number % 2;
    console.log(reminder);
    if (reminder === 0) {

        console.log('number is even | নাম্বারটি জোর ');
    }


    else {
        console.log('number is odd | নাম্বারটি বিজোড়');
    }
}
isEven(483);
isEven(888); */


function isEven(number) {
    const reminder = number % 2;
    console.log(reminder);
    if (reminder === 0) {

        return true;
    }


    else {
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);

// isEven(483);
// isEven(888);