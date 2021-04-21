function isOldEnoughToDrink(){
    let age = prompt("what is your age?")
    return (parseInt(age) >= 21) ? true : false;
}
console.log(isOldEnoughToDrink());