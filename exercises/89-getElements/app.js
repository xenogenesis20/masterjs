// Write your function here
var obj = {
    key: [1000, 10, 50, 10]
};

const getElementsThatEqual10AtProperty = (object, prop) => {
    if ((object[prop].length > 0) && (Array.isArray(object[prop])) && (object[prop])){
    // if (object[prop]) // if exists
        let newArray = object[prop].filter(num => num == 10)
        return newArray
    }   
     return [];
       
}

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
