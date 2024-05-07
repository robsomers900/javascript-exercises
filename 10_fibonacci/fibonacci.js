const fibonacci = function(num) {
    num = Number(num)
    if (num < 0){
        return "OOPS";
    }
    else if (num < 2 && num >= 0){
        return num;
    }
    else {
        let now = 0;
        let next = 1;
        arr = []
        arr[0] = 0;
        for(i = 1; i < num; i ++){
            temp = next + now;
            arr[i] = temp;
            now = next;
            next = temp;
        }
        return arr[num - 1];
    };
};

//console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
