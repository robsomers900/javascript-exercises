const reverseString = function(word){
    wordArray = word.split("")
    reversedWord = ""
    i = 1
    while(i <= wordArray.length){
        reversedWord += wordArray.at(-i);
        i++;
    }
    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;
