function factorial(number) {



    let i = 7;
    let result = 1;

    while (i >= 1) {

        result = result * i;
        i--;
    }
}


const output = factorial(7);

console.log(output);