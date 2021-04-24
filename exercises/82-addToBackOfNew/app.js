// Write your function here

const addToBackOfNew = (array,number) =>{
    let newArray = array.map(item => item );
    newArray.unshift(number)
    return newArray;

}

var input = [1, 2];
var output = addToBackOfNew(input, 4);

console.log("Input",input); // --> [1, 2]
console.log("output",output); // --> [1, 2, 3]