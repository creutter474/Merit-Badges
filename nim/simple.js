/* Nim Super Simple */

 var count = 0;
 var winner = "No one won";
 var turn = 0
     
 /* Main Code 
  * loop while count <21
  * if count < 21 call cpuTurn, adding to count and alerting count. Set winner as player. 
  * if count < 21 call playerTurn, adding to count and alerting count. Set winner as CPU.
  * end loop
  * alert winner
  */
     
     while (count <21){
      if (count <21){
        cpuTurn();
      }
       if (count < 21){
         playerTurn();
       }
     }
alert(winner+" won!")
       
     
  
/* playerTurn
 * set winner as CPU
 * prompt for turn (1-3)
 * @param none
 * @return turn (integer)
 */
function playerTurn(){
  turn = parseInt(prompt("How many would you like to count 1-3"))
  count += turn;
  alert("You counted "+turn+" the count is now "+count)
   winner = "Computer";
}

/* cpuTurn
 * set winner as player
 * set turn as random number 1-3
 * alert CPU's turn
 * return turn
 */
function cpuTurn(){
  turn = Math.floor(Math.random()*3)+1;
  count += turn;
  alert("Computer counted "+turn+" the count is now "+count)
  winner = "Player";
}
