// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var count = 0;
var i = 1;

function doit(){
    for (i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    }
}

doit();

console.log(count);

// AFTER OVERVIEW

var count = 999;

function sumDivisibleBy(n){
    var p = Math.floor(count / n);
    return n*(p*(p+1)) / 2;
}

console.log(sumDivisibleBy(3)+sumDivisibleBy(5)-sumDivisibleBy(15));
