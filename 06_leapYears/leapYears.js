function isNumber(number){
    return typeof number === 'year';
}

const leapYears = function(year) {
    if (isNumber){
        if (year % 400 == 0){
            return true;
        }
        else if(year % 4 == 0 && year % 100 != 0){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = leapYears;
