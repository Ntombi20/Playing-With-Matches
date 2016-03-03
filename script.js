function randomRange(min, max) {

  return Math.floor(Math.random() * (max - min) + min);

}
var myRandom = randomRange(1, 9);
document.getElementById('block1').innerHTML = myRandom;
var myRandom2 = randomRange(1, 9);
document.getElementById('block2').innerHTML = myRandom2;
var myRandom3 = randomRange(1, 9);
document.getElementById('block3').innerHTML = myRandom3;

// var matches = function(locationClass){

//  	var blocks = document.querySelector('locationClass');
//  	block
// }


// var displayMessage = function(text){
//     var message = document.getElementById("message");
//     message.innerHTML = text;
// };

// var block = document.getElementById('div');
// 	if (className === "block") {
// 		block.classList.remove("block");
// 	 	block.classList.add(block.backgroung());
// 	};
	
