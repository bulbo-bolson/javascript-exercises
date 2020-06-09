
function range(start, end) {
    let all = [];
    for (i = start; i <= end; i++) {
        all.push(i)
    }
    return all;
}

function sum(numbers) {
    let result = 0;
    for (let n of numbers) {
        result += n;
    }
    return result;
}

ranged = range(1, 10);
summed = sum(ranged);
console.log(summed);