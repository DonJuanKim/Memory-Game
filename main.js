const cards = document.querySelectorAll('div.card');
const startBtn = document.getElementById('startBtn');


// Flip cards

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
    cards[i].classList.add('flippedCard');
    const flippedCard = document.querySelectorAll('.flippedCard');
    
    if (flippedCard.length == 2) {
        console.log("it's two");
        checkMatch(flippedCard);
    }  
    })};

function checkMatch(flippedCard) {
    console.log(flippedCard);
    let pickedCards = document.getElementsByTagName('img');
    let firstPick = pickedCards[0].id;
    let secondPick = pickedCards[1].id;
    console.log(firstPick);
    console.log(secondPick);

    if (firstPick == secondPick) {
      console.log("match");
      
    } else {
        flippedCard.classList.remove("flippedCard");
        console.log("try again");
    }
}

// shuffle cards 

startBtn.addEventListener('click', function(){
    shuffleCards();
});

function shuffleCards() {
for(let i = cards.length - 1; i > 0; i--){
    let randIndex = Math.floor(Math.random() * (i+1));
    cards[randIndex].style.order = i;
    cards[i].style.order = randIndex;
};
}