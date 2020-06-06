

function countBs(word) {
    return countChar(word, "B");
}

function countChar(word, char) {
    char_counts = 0;
    for (index = 0; index < word.length; index++) {
        if (word[index] == char) char_counts++;
    }
    return char_counts;
}
