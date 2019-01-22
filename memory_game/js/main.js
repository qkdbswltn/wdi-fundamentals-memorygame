console.log("test!");

var cards = [{rank: 'queen',
              suit: 'hearts',
              cardImage: 'images/queen-of-hearts.png'},
              {rank: 'queen',
              suit: 'diamonds',
              cardImage: 'images/queen-of-diamonds.png'},
              {rank: 'king',
              suit: 'hearts',
              cardImage: 'images/king-of-hearts.png'},
              {rank: 'king',
              suit: 'diamonds',
              cardImage: 'images/king-of-diamonds.png'}];
var cardsInPlay=[];

var checkForMatch = function(){
  if (cardsInPlay[0]===cardsInPlay[1]){
    console.log('You found a match!');
  } else{
    console.log('Sorry, try again');
  }
};


var createBoard = function(){
  for (var i=0; i<cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

createBoard();

var cardElements = document.querySelectorAll('img')

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  var setImage = cards[parseInt(cardId)].cardImage;
  var cardRank = cards[parseInt(cardId)].rank;
  this.setAttribute('src', setImage);
  cardsInPlay.push(cardRank);
  if (cardsInPlay.length===2){
    checkForMatch();
  }
};

for (var i=0; i<cardElements.length; i++){
  cardElements[i].addEventListener('click',flipCard);
}



/*
var cardOne=cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped "+ cardsInPlay[0]);

var cardTwo=cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped "+ cardsInPlay[1]);

if (cardsInPlay.length===2){
  if (cardOne===cardTwo){
    alert('You found a match!');
  } else{
    alert('Sorry, try again');
  }
}
*/
