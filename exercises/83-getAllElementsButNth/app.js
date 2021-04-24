// Write your function here

const getAllElementsButNth = (array,num) =>{
     return array.filter((elm,index) => index != num)
    
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']