
for (let counter = 1; counter <= 100; counter++) {
    if (counter % 3 && counter % 5) {
        console.log("FizzBuzz");
    } else if (counter % 3) {
        console.log("Fizz");
    } else if (counter % 5) {
        console.log("Buzz");
    }
}