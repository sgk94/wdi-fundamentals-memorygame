console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User Flipped queen");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User Flipped king");

if (cardsInPlay.length === 2){
	console.log("true");
} else{
	console.log("false");
} if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
}	else{
	alert("Sorry, try again.");
}
