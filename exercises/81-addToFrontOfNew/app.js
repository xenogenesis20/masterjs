// Write your function here
let input = [1, 2];

// var output = addToFrontOfNew(input, 3)

const addToFrontOfNew = (input,num) =>{
    let newArray = [];
    input.forEach(element => newArray.push(element))
    newArray.unshift(num)
       return newArray
}


console.log(addToFrontOfNew(input,3));


