const obj1 = { 
    val1: 10,
    val2: 20,
    val3:30
}

//desruct object
const { val1, val3 } = obj1;

const runFunct = (val) => {
var arrayA = [];
var i = 0;
while (i<val) {
    arrayA.push(i);
    i++;
}
console.log(arrayA);
}

runFunct(val3);


