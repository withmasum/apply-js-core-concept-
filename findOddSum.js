/* function getSumOfAnArray(numbers) {
    // Primary let value is 0 zero; 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);

    }


}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];

getSumOfAnArray(myNumbers);
 */



//get odd numbers of an arry 


function getOddNumbersOfAnAray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;

        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);

        }

    }

    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnAray(myNumbers)
console.log(oddNumbers);

