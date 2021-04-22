// Write your function here

var obj = {
    key: [1, 2, 3]

};

const getAverageOfElementsAtProperty = (obj, key) => {
    let total = 0;
    for (prop in obj) {
        if ((prop == key) && (obj[key].length !== 0)){
            for (let i = 0; i < obj[key].length; i++) {
                total += obj[key][i]
            }
        return total / obj[key].length}
        else return 0;   
    }


}

console.log(getAverageOfElementsAtProperty(obj, 'key'));
console.log(typeof []);
