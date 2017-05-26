// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philippines', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resove, reject) {
//     setTimeout(function () {
//       resove(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
//
// getTempPromise('Philippines').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else{
      reject('Numbers only');
    }
  }) ;
}

addPromise(9,2).then(function (temp) {
  console.log('success', temp);
}, function (err) {
  console.log('error', err);
})

addPromise('2',4).then(function (temp){
  console.log('sucess', temp);
}, function(err){
  console.log('error', err);
})
