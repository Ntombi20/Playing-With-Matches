function randomRange(min, max) {

  return Math.floor(Math.random() * (4 - 1) + 1);

}
var myRandom = randomRange(1, 3);
var myRandom1 = randomRange(1, 3);
var myRandom2 = randomRange(1, 3);
var myRandom3 = randomRange(1, 3);
var myRandom4 = randomRange(1, 3);
var myRandom5 = randomRange(1, 3);
var myRandom6 = randomRange(1, 3);
var myRandom7 = randomRange(1, 3);
var myRandom8 = randomRange(1, 3);


function updateHTML(){

	var button = document.getElementById('button');
	var block = document.querySelectorAll('.block');
	button.addEventListener('click', function() {
		//for (var i = 0; i < message.length; i++){
			for (var i = 0; i < block.length; i++) {
				block[0].innerHTML = myRandom;
				block[1].innerHTML = myRandom1;
				block[2].innerHTML = myRandom2;
				block[3].innerHTML = myRandom4;
				block[4].innerHTML = myRandom5;
				block[5].innerHTML = myRandom6;
				block[6].innerHTML = myRandom7;
				block[7].innerHTML = myRandom8;
				block[8].innerHTML = myRandom3;
				
				//
				if (block[0].innerHTML === block[1].innerHTML && block[0].innerHTML === block[2].innerHTML) {
					block[0].classList.add("purple");
					block[1].classList.add("purple");
					block[2].classList.add("purple");
					// message.push(block[0].innerHTML+ " and " + block[1].innerHTML + 
					// 	" and " + block[2].innerHTML + " are matching")		
				}
				if (block[3].innerHTML === block[4].innerHTML && block[3].innerHTML === block[5].innerHTML) {
					block[3].classList.add("purple");
					block[4].classList.add("purple");
					block[5].classList.add("purple");
					// message.push(block[3].innerHTML+ " and " + block[4].innerHTML + 
					// 	" and " + block[5].innerHTML + " are matching")		
				}
				if (block[6].innerHTML === block[7].innerHTML && block[6].innerHTML === block[8].innerHTML) {
					block[6].classList.add("purple");
					block[7].classList.add("purple");
					block[8].classList.add("purple");
					// message.push(block[6].innerHTML+ " and " + block[7].innerHTML + 
					// 	" and " + block[8].innerHTML + " are matching")		
				}
				//
				if (block[0].innerHTML === block[3].innerHTML && block[0].innerHTML === block[6].innerHTML) {
					block[0].classList.add("purple");
					block[3].classList.add("purple");
					block[6].classList.add("purple");
					// message.push(block[0].innerHTML+ " and " + block[3].innerHTML + 
					// 	" and " + block[6].innerHTML + " are matching")		
				}
				if (block[1].innerHTML === block[4].innerHTML && block[1].innerHTML ===block[7].innerHTML) {
					block[1].classList.add("purple");
					block[4].classList.add("purple");
					block[7].classList.add("purple");
					// message.push(block[1].innerHTML+ " and " + block[4].innerHTML + 
					// 	" and " + block[7].innerHTML + " are matching")		
				}
				if (block[2].innerHTML === block[5].innerHTML && block[2].innerHTML ===block[8].innerHTML) {
					block[2].classList.add("purple");
					block[5].classList.add("purple");
					block[8].classList.add("purple");
					// message.push(block[2].innerHTML+ " and " + block[5].innerHTML + 
					// 	" and " + block[8].innerHTML + " are matching")		
				}
				//
				if (block[0].innerHTML === block[4].innerHTML && block[0].innerHTML ===block[8].innerHTML) {
					block[0].classList.add("purple");
					block[4].classList.add("purple");
					block[8].classList.add("purple");
					// message.push(block[0].innerHTML+ " and " + block[4].innerHTML + 
					// 	" and " + block[8].innerHTML + " are matching")		
				}
				if (block[2].innerHTML === block[4].innerHTML && block[2].innerHTML ===block[6].innerHTML) {
					block[2].classList.add("purple");
					block[4].classList.add("purple");
					block[6].classList.add("purple");
					// message.push(block[2].innerHTML+ " and " + block[4].innerHTML + 
					// 	" and " + block[6].innerHTML + " are matching")	
				}
		
			}
	})	
	// var msg = message.join("<br>");
	// return msg;

}

// function message(text){
//     var message = document.getElementById("message");
//     message.innerHTML = text;
//}

updateHTML();

