function isNumber(value) {
    return typeof value === 'number';
  }

const sumAll = function(start, end) {
    let sum = 0
    if(start < 0){
        return "ERROR";
    }
    else if(end < 0){
        return "ERROR";
    }
    else if(isNumber(start ) == false || isNumber(end) == false){
        return "ERROR";
    }
    else if(start <= end){
        for(i = start; i <= end; i++){
            sum += i;
        }
    }
    else if(start > end){
        for(i = end; i <= start; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
