const getTheTitles = function(inputArr) {
    let returnArr = [];
    for (const book of inputArr){
        returnArr.push(book['title']);
    }
    return returnArr;
};
// console.log(getTheTitles([      
//     {
//     title: 'Book',
//     author: 'Name'
//     },
//     {
//     title: 'Book2',
//     author: 'Name2'
//   }]))

// Do not edit below this line
module.exports = getTheTitles;
