

function every(array, predicateFun) {
    for (value of array) {
        if (!predicateFun(value)) {
            return false;
        }
    }
    return true;
}

function everyWithSome(array, predicateFun) {
    return !array.some(element => !predicateFun(element));
}

console.log(every([1, 2, 3, 4, 5], x => x > 1));
console.log(everyWithSome([1, 2, 3, 4, 5], x => x > 1));
