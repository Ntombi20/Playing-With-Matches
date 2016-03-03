function randomRange(min, max) {

  return Math.floor(Math.random() * (max - min) + min);

}

var myRandom = randomRange(1, 9);
document.getElementById('block1').innerHTML = myRandom;
if (myRandom >3 && myRandom<5) {

	block1.classList.add("purple");
};

var myRandom2 = randomRange(1, 9);
document.getElementById('block2').innerHTML = myRandom2;
if (myRandom2 >3 && myRandom<5) {

	block2.classList.add("purple");
};

var myRandom3 = randomRange(1, 9);
document.getElementById('block3').innerHTML = myRandom3;
if (myRandom3 >3 && myRandom<5) {

	block3.classList.add("purple");
};

var displayMessage = function(text){
    var message = document.getElementById("message");
    message.innerHTML = text;
};

