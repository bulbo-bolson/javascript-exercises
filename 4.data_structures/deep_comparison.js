

function deepEqual(obj_1, obj_2, equal = false) {
    if (typeof obj_1 === 'object' && typeof obj_2 === 'object') {
        if (Object.keys(obj_1) !== Object.keys(obj_2)) {
            return false;
        } else {
            return deepEqual(
                Object.values(obj_1), 
                Object.values(obj_2));
        }
    } else {
        equal = obj_1 === obj_2;
    }
    return equal;
}

obj_1 = {
    param1: 'obj_1_value1',
    param2: 'obj_1_value2'
}
obj_2 = {
    param1: 'obj_2_value1',
    param2: 'obj_2_value2'
}
console.log(obj_1);
console.log(obj_2);
console.log(`obj1 keys: ${JSON.stringify(Object.keys(obj_1))}`);
console.log(`obj2 keys: ${JSON.stringify(Object.keys(obj_2))}`);
console.log(deepEqual(obj_1, obj_2));