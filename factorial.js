//Factoriral 3! = 3*2*1 
// 4! = 4*3*2*1 

function factorial(numbers) {

    let result = 1;
    for (let i = 1; i <= 9; i++) {

        result = result * i;

    }

    return result;
}

const result = factorial(9);
console.log(result);