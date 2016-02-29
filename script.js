
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin) + myMin);// Change this line

}
var myRandom = randomRange(1, 9);
console.log(myRandom);