function randomRange(min, max) {

  return Math.floor(Math.random() * (max - min) + min);

}
var myRandom = randomRange(1, 9);

document.getElementById('block1').innerHTML = myRandom;
document.getElementById('block2').innerHTML = myRandom;
document.getElementById('block3').innerHTML = myRandom;


