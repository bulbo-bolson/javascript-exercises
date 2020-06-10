
function reverseArray(array) {
    new_array = [];
    for(i = array.length - 1; i >= 0; i--) {
        new_array.push(array[i]);
    }
    return new_array;
}

function reverseArrayInPlace(array) {

}

console.log(reverseArray([1, 2, 3, 4]))
