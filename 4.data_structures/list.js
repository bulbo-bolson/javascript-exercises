
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return {
        value, 
        rest: list
    };
}

function nth(list, number, index = 0) {
    if (number === index) return list.value;
    else {
        index++;
        return nth(list.rest, number, index);
    };
}


array = [1, 2, 3];
list = arrayToList(array);
console.log(`list: ${JSON.stringify(list)}`)
console.log(`arrayToList: ${JSON.stringify(arrayToList(array))}`);
console.log(`listToArray: ${JSON.stringify(listToArray(list))}`);
console.log(`prepend: ${JSON.stringify(prepend(1, list))}`);
console.log(`nth 1: ${JSON.stringify(nth(arrayToList([10, 20, 30]), 2))}`);
