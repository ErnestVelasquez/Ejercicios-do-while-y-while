let fibonacci = [0, 1];

while(true){
    let nexValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if(nexValue > 20){
        break;
    }
    fibonacci.push(nexValue);
}

console.log(fibonacci);