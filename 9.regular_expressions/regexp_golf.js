

function test_1(words) {
    for (word of words) {
        console.log(`${word}: ${/car|cat/.test(word)}`);
    }
}

function test_2(words) {
    for (word of words) {
        console.log(`${word}: ${/pop|prop/.test(word)}`);
    }
}

console.log(test_1(["carrot", "asdf", "cats"]));