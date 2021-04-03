const employees = [
{name: 'john', age: 47},
{name: 'alex',  age:35},
{name: 'john', age: 27},
]

let f = employees.filter( element => {  return element.name.indexOf('john')>-1});
console.log (f)

let find =  employees.find( element => {  return element.name.indexOf('john')>-1});
console.log ('find result: ', find)