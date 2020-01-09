/* Guess Game: valadator function: merit badge validator advanced
 * adds game stats counting average turns and game continuation
 * By Connor Reutter
 */
var totalTurns = 0;
var again = true;
var games = 0;
while (again == true){
	games++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	var guess = 0;
	var turns = 0;
	while(guess != answer){
		guess = prompt("Guess my number 1-100");
		if (guess == "q"){
      alert("Quitter!")
      break;
    }
		valid = validator(guess);
		if (valid ==true){
			turns++;
			if (guess<answer) alert("too low try again");
			else if (guess>answer) alert("Too high try again");
			}
		else alert("Invalid guess");
		}
		if (guess == "q")break;
	if (guess == answer) {
		gameStats();
		again = newGame();
	}
	else alert("Quitter!");
}

 function validator(guess) {
	 if (guess >0 && guess <101){
		return true;
	 }
	 else{
		 return false;
	 }
 }
 
 function gameStats(){
	 alert("you guessed it in "+turns+" turns");
	 totalTurns += turns;
	 var averageTurns = totalTurns / games;
	 alert("You won the "+games+" games with an average of "+averageTurns+" turns");
 }
 
 function newGame(){
	again = confirm("Do you want to stop playing? press cancel to stop");
	if(again == false){
		alert("Sorry to see you go");
		return false;
	}
	else{
		return true;
	}
}
