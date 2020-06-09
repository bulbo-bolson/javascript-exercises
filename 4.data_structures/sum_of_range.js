
function range(start, end, step = 1) {
    let all = [];
    for (i = start; i <= end; i = i + step) {
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

ranged = range(1, 10, 2);
console.log(ranged)
summed = sum(ranged);
console.log(summed);