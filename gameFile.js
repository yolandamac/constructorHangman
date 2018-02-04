//Set Variables
var letterCons = require("./letterDisplay.js");
var wordCons = require("./letterCheck.js");
var game = require("./word.js");
var inquirer = require("inquirer");
var randomWrd = game.randomWrd;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randomWrd);
var maxGuesses = 10;

function gameTime(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('Bummer!  Winning word was' + ' '+ randomWrd +'!');

	//Game Ends
	return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess A Letter!',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){
				var letter = letterInput.letter; 
				myWord.findLetter(letter);
					if(myWord.isComplete()){ 
					console.log('You win!  Winning word is' + ' '+ myWord.toString() + '!');
					return;
					}
				console.log('-------------------\n');
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				gameTime();
				}
  );
}

gameTime(); //Start Game