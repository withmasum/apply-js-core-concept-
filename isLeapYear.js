/* function isLeapYear(year) {

    const reminder = year % 4;
    if (reminder === 0) {

        console.log('your year is leap year', year);
    }
    else {

        console.log('your year is not a leap year', year);
    }


}
isLeapYear(1933);
isLeapYear(1952); */


/* 
function isLeapYear(year) {

    const reminder = year % 4;
    if (reminder === 0) {

        return true;
    }
    else {

        return false;
    }


}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);
const isHerYear = isLeapYear(1952);
console.log('is her year', isHerYear); */




function isLeapYear(year) {

    const reminder = year % 4;
    if (reminder === 0) {

        return true;
    }
    else {

        return false;
    }


}


const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);
const isHerYear = isLeapYear(1952);
console.log('is her year', isHerYear);

