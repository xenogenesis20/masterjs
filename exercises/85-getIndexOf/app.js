// Write your function here

const getIndexOf = (find,a) => {
    for (let i =0; i<a.length; i++){
        if (a[i] == find) return i;
        
    }
    return -1
}
    

// const getIndexOf = (char,string) => {
//     let ind = null;
//      string.split("").map((ele,index) => { 
//         if (ele == char) 
//        ind = index
       
//  })
//         return ind;
// }

var output = getIndexOf('a', 'I am a hacker');

console.log(output); // --> 2