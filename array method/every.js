let pnumbers = [10, 20, 30]
let isAllPos = pnumbers.every( number => { return number>0} )
console.log(isAllPos);

//The every method tests whether all elements in the array pass the provided
// test conditions and returns a boolean true or false value.