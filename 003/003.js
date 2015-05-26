//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

function factors(n){
    var i = 1;
    var r = [];
    var h = false;
    do{
        if(n/i === Math.round(n/i)){
            if(r.indexOf(i) === -1){
                r.push(i);
                r.push(n/i);
            }else{
                h = true;
            }
        }
            i++;
    }while(h === false);

    console.log(i * i);
    
    return r.sort(function(a,b){
        if(a>b){return 1;}
        else if(a<b){return -1;}
        else{return 0;}
    });
}

function primeFactors(n){
    return factors(n).filter(function(f){
        var x = Math.round(Math.sqrt(f));
        var hit = false;
        var i = 2;
        do{
            if(f/i === Math.round(f/i)){
                hit = true;
            }
            i++;
        }while(i<x && hit === false)
        return !hit;
    });
}

var primes = primeFactors(600851475143);
console.log(primes[primes.length - 1]);
//6857


// AFTER OVERVIEW

function pf(n){
    var lastFactor;
    if (n % 2 === 0){
        lastFactor = 2;
        n = n/2;
        while(n % 2 === 0){
            n = n/2;
        }
    }else{
        lastFactor = 1;
    }
    
    var factor = 3;
    var maxFactor = Math.sqrt(n);
    
    while (n > 1 && factor <= maxFactor){
        if (n % factor === 0){
            n = n / factor;
            lastFactor = factor;
            while (n % factor === 0){
                n = n / factor;
                maxFactor = n;
            }
        }
        factor = factor + 2;
    }
    if (n === 1){
        return lastFactor;
    }else{
        return n;
    }
}

console.log(pf(600851475143));
