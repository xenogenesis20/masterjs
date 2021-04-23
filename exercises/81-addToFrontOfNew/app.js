// Write your function here
let input = [1, 2];

// var output = addToFrontOfNew(input, 3)

const addToFrontOfNew = (input,num) =>{
    
       let output = input.map((x) =>{ input.unshift(num) })
    
    return output
}


console.log(addToFrontOfNew(input,3));


