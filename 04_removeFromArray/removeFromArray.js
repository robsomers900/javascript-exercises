const removeFromArray = function(array) {
    let i = 0;
    let new_array = [];
    const argsArray = Array.from(arguments).slice(1);
    while(i< array.length){
        if(argsArray.includes(array[i])){
            //dont add
        }
        else{
            //do add
            new_array.push(array[i]);
        }
        i++;
    }
    return new_array;
}

// Do not edit belowa this line
module.exports = removeFromArray;
