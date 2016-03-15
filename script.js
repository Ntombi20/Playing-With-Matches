function randomRange(min, max) {

  return Math.floor(Math.random() * (9 - 1) + 1);

}
var myRandom = randomRange(1, 9);
var myRandom1 = randomRange(1, 9);
var myRandom2 = randomRange(1, 9);

var block = document.querySelectorAll('.block');

function update(){
	var elem = document.getElementsByClassName('block');

		for (var i = 0; i < elem.length; i++) {
			elem[0].innerHTML = myRandom;
			elem[1].innerHTML = myRandom1;
			elem[2].innerHTML = myRandom2;
		}

	if (elem[0].innerHTML === elem[1].innerHTML) {
		elem[0].classList.add("purple");
		elem[1].classList.add("purple");
		
	}
	if (elem[0].innerHTML === elem[2].innerHTML) {
		elem[0].classList.add("purple");
		elem[2].classList.add("purple");
	
	}
	if (elem[1].innerHTML === elem[2].innerHTML) {
		elem[2].classList.add("purple");
		elem[1].classList.add("purple");
		
	}

} 

update();

function display(text){
    var message = document.getElementById("message");
    message.innerHTML = text;
};	