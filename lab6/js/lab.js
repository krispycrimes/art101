// Minesweeper
// An Implementation of the game
// Author: Kristine Gail Buriel
// Date: 4/23/24

// Constants

// Functions
//Define the three cell states
		//An unopened cell is blank 
		//An opened cell displays whether it is a ‘mine cell’ or a ‘non-mine cell’
			//An unopened cell can become an opened cell by left clicking on it
			//If it is a “non-mine cell’, the open cell will then display a number indicating how many mines are diagonal or adjacent to it 
		//A flagged cell covers an unopened cell with an image of a flag
			//An unopened cell can become a flagged cell by right clicking on it
			//A flagged cell can be converted back to an unopened cell by right clicking on it
	//Define lose condition
		//If the player opens a ‘mine cell’
	//Define win condition
		//If all the ‘non-mine cells’ are opened cells and all the ‘mine cells’ are unopened or flagged cells
	//Set up the board
		//Generate a game board of 8x8 cells
		//Randomly select 10 tiles to be designated as ‘mine cells’
		//The remaining 54 tiles are designated as ‘non-mine cells’
		//Start the game with all 64 cells being unopened cells 
	//Start timer from 00:00 
	//In the corner, keep track of and display ‘flag number’
		//The flag number starts at 10
		//Everytime an unopened cell is converted to a flagged cell, subtract 1 from the flag number
		//If flag cell is removed, add one to the flag number 
	//Accept user input 
	//After each user input, check for lose or win condition
		//If lose condition is met, replace the revealed mine tile with an explosion tile. Starting from this tile, replace all adjacent cells with explosion tiles until all tiles are explosion tiles
		//If win condition is met, play animation of confetti bursting
		//If lose or win condition is met, stop timer and display final timer number
		//If lose or win condition is met, display a button with the text ‘new game?’
			//If ‘new game’ button is clicked with the left mouse button, restart the code procedure

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
