/* Takes a number from the command line

this number could be anything

roll a dice as many times as the number from the command line

Function rollDice

dice is six-sided 

math.random(number) -> this will give me random number

number just has to be between 1 and 6 on dice

*/

var num = process.argv[2];
num = Number(num);
// console.log(argument);
function rolldice(min, max) {
    // var max = 6;
    // var min = 1;
    var range = max - min;
    var offset = min;
    return Math.round(offset + (Math.random() * range));
}

function diceroller(num) {
    var diceresult = [];
    for (let i = 0; i < num; i++) {
        // var random = rolldice();
      diceresult.push(rolldice(1, 6));
    }
    return diceresult;
}
var rolled = diceroller(num);
console.log('rolled:' + num + ' times:', rolled.join(', '));