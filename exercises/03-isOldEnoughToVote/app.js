function isOldEnoughToVote(age) {
    if (age >= 18) {
        return true
    }else return false;

} 

var output = isOldEnoughToVote(18);
console.log(output);