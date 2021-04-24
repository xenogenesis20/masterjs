// Write your function here

const findMinLengthOfThreeWords = (str1, str2, str3,str4) => {
    let output = str1;
    if (str1.length > str2.length){ output = str2}
    if (str2.length > str3.length){ output = str3}
    if (str3.length > str4.length){ output = str4}
    return output.length

}


var output = findMinLengthOfThreeWords('a', 'be', 'see','future');

console.log(output); // --> 1
