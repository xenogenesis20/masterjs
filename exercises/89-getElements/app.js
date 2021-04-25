// Write your function here
var obj = {
  key: [1000, 10, 50, 10]
};

const getElementsThatEqual10AtProperty = (object, prop) =>{
    if (object[prop].lenght == 0) return []
    if (object[prop].forEach(element => { element !== 10})) return []
    if (!Array.isArray(object[prop])) return []
    

      let newArray = object[prop].filter(num => num == 10).map(item => item )
   
    return newArray
}





var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
