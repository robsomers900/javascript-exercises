const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestName = "";
    let age = 0
    for (const person of people){
        age = person['yearOfDeath'] - person['yearOfBirth'];
        if (age > oldestAge){
            oldestAge = age;
            oldestName = person['name'];
        }
    }
    return oldestName;
};

module.exports = findTheOldest;
