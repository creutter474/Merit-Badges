/* Guess Game: valadator function: merit badge 2
 * adds game stats counting avrage turns and a game end
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
		if (guess == q) break;
		if (validator(guess)==true){
			turns++;
			if (guess<answer) alert("too low try again");
			else if (guess>answer) alert("Too high try again");
			}
		else alert("Invalid guess");
		}
	if (guess == answer) alert("You got it in ("+turns+") turns!");
	gameStats();
	newGame();
	else alert("Quitter!");
}

 function validator(guess) {
	 if (guess >0 && guess >101) validator 
	 return true;
	 else validator return false;
 }
 
 function gameStats(){
	 var averageTurns = totalTurns / games;
	 alert("you guessed it in "turns+" turns");
	 alert("You won the "+games+" games with an avrage of "+averageTurns+" turns");
 }
 
 function newGame(){
	again = confirm("Do you want to stop playing? press cancel to stop");
	if(again == false);
	alert("Sorry to see you go");
	return false;
 }
