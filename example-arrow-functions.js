var names = ['Sola','Madz','Jayvee'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
//   var x = 'something'
// });
//
// names.forEach((name) => console.log(name));

//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Sola'));
//
// var person = {
//   name: 'Sola',
//   greet: function (){
//     names.forEach( (name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//chalenge area
function add(a,b){
  return a + b;
}

// addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(1,2));
// addExpression
var addExpression = (a,b) => a+b;
console.log(addExpression(2,3));


// console.log(add(1,3));
// console.log(add(9,0));
