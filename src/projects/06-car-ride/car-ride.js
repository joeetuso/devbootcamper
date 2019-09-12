// var answer = prompt('Are we there yet?')
// while (answer !== 'yes' && answer != 'yeah') {
//   var answer = prompt('Are we there yet?')
// }

// alert('YES! We made it! 🏁')

// Version 2.0

var answer = prompt('Are we there yet?')
while (answer.indexOf('yes') === -1) {
  var answer = prompt('Are we there yet?')
}

alert('YES! We made it! 🏁')
