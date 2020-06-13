

function flatten(array) {
    return array.reduce((flattened, ar) => flattened.concat(ar), []);
}

various_arrays = [[1, 2, 3], [4, 5, 6]];

let ab = [];
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
console.log(ab.concat(ar2));
console.log(flatten(various_arrays));
