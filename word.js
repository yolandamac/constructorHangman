
//This file provides a list of words for the game to randomly choose from
var wordsToGuess = ['stilleto', 'clog', 'bootie', 'mule', 'creeper', 'moccasin', 'brogue', 'wedge', 'sandal', 'slingback'];
var randomIndx = Math.floor(Math.random() * wordsToGuess.length);
var randomWrd = wordsToGuess[randomIndx];
exports.randomWrd = randomWrd;