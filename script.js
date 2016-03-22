function randomRange(min, max) {

  return Math.floor(Math.random() * (6 - 1) + 1);

}

function displayMessage(text){
    var displayMessage = document.getElementById("message");
    displayMessage.innerHTML = text;
}

var button = document.getElementById('button');
var block = document.querySelectorAll('.block');

button.addEventListener('click', function update() {
	
	var display = [];

	for (var d = 0; d < block.length; d++) {
		block[d].classList.remove("purple");
		block[d].innerHTML = randomRange();
	}
				
		/*rows*/
		if (block[0].innerHTML === block[1].innerHTML && block[0].innerHTML === block[2].innerHTML) {
			block[0].classList.add("purple");
			block[1].classList.add("purple");
			block[2].classList.add("purple");
			display.push(block[0].innerHTML+ " and " + block[1].innerHTML + 
        		" and " + block[2].innerHTML + " 1st row is matching"); 
		}
		if (block[3].innerHTML === block[4].innerHTML && block[3].innerHTML === block[5].innerHTML) {
            block[3].classList.add("purple");
            block[4].classList.add("purple");
            block[5].classList.add("purple");
            display.push(block[3].innerHTML+ " and " + block[4].innerHTML + 
        		" and " + block[5].innerHTML + " 2nd row is matching");
        }
        if (block[6].innerHTML === block[7].innerHTML && block[6].innerHTML === block[8].innerHTML) {
         	block[6].classList.add("purple");
            block[7].classList.add("purple");
            block[8].classList.add("purple");
            display.push(block[6].innerHTML+ " and " + block[7].innerHTML + 
        		" and " + block[8].innerHTML + " 3th row is matching");
        }

        //column match
        if (block[0].innerHTML === block[3].innerHTML && block[0].innerHTML === block[6].innerHTML) {
			block[0].classList.add("purple");
	        block[3].classList.add("purple");
	        block[6].classList.add("purple");
	        display.push(block[0].innerHTML+ " and " + block[3].innerHTML + 
        		" and " + block[6].innerHTML + " 1st column is matching");
	    }
	    if (block[1].innerHTML === block[4].innerHTML && block[1].innerHTML === block[7].innerHTML) {
	        block[1].classList.add("purple");
	        block[4].classList.add("purple");
	        block[7].classList.add("purple");
	        display.push(block[1].innerHTML+ " and " + block[4].innerHTML + 
        		" and " + block[7].innerHTML + " 2nd column is matching");
	    }
	    if (block[2].innerHTML === block[5].innerHTML && block[2].innerHTML === block[8].innerHTML) {
	        block[2].classList.add("purple");
	        block[5].classList.add("purple");
	        block[8].classList.add("purple");
	        display.push(block[2].innerHTML+ " and " + block[5].innerHTML + 
        		" and " + block[8].innerHTML + " 3th column is matching");
	    }
			
		//diagonal match
        if (block[0].innerHTML === block[4].innerHTML && block[0].innerHTML === block[8].innerHTML) {
            block[0].classList.add("purple");
            block[4].classList.add("purple");
            block[8].classList.add("purple");
            display.push(block[0].innerHTML+ " and " + block[4].innerHTML + 
        		" and " + block[8].innerHTML + " 1st diagonal is matching");
        }
        if (block[2].innerHTML === block[4].innerHTML && block[2].innerHTML === block[6].innerHTML) {
            block[2].classList.add("purple");
            block[4].classList.add("purple");
            block[6].classList.add("purple");
            display.push(block[2].innerHTML+ " and " + block[4].innerHTML + 
        		" and " + block[6].innerHTML + " 2nd diagonal is matching");
        }	

    var msg = display.join("<br>");
     	return msg;
    
})



	