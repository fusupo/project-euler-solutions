var fib = function(a, b){

    var sum = 0;
    
    while(a[a.length - 1] < b){
        
        var x = a[a.length - 2];
        var y = a[a.length - 1];
        var n = x + y;
        if(n % 2 === 0) sum += n;
        a.push(x + y);

    }

    return sum;
    
};

console.log(fib([1,1], 4000000));
//4613732
