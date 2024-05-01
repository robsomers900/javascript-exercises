const palindromes = function (str) {
    str = str.toLowerCase();
    array = str.split('');
    array = array.filter(char => {
        const regex = /[^\w\s]/;
        //char not equal to space or special
        if(regex.test(char) != true && char != " "){
            return true;
        }
        else{
            return false;
        };
    });
    reversedArray = array.slice().reverse();
    reversedStr = reversedArray.join('');
    str = array.join('');
    //return reversedArray
    
    if (reversedStr == str){
        return true
    }
    else {
        return false;
    }
};
//console.log(palindromes("Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
