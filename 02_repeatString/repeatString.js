// understand - write a function that takes two arguments - word and num - and returns the word num times with no spaces
// plan - loop up to num, concating word to a str var each time
// x 1 provide args
// 2 create loop
// 3 declare str var and += to word

const repeatString = function(word, num) {
    result = ""
    if (num < 0){
        return "ERROR";
    }
    else {    
        for(i = 0; i < num; i++){
        result += word;
    }
    return result;}
};

// Do not edit below this line
module.exports = repeatString;
