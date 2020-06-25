

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    let randomNumber = Math.round(Math.random() * 100);
    console.log(`randomNumber: ${randomNumber}`)
    if (randomNumber >= 80) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure;
    }
}

function retryMultiply(a, b) {
    let result = undefined;
    while (result === undefined) {
        try {
            result = primitiveMultiply(a, b);
            return result;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("Catched exception");
            } else {
                throw e;
            }
        }
    }
}

a = 4;
b = 4;
console.log(retryMultiply(a, b));