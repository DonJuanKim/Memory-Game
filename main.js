const cards = document.querySelectorAll('div.card');
const startBtn = document.getElementById('startBtn');

function shuffleCards() {
for(let i = cards.length - 1; i > 0; i--){
    let randIndex = Math.floor(Math.random() * (i+1));
    cards[randIndex].style.order = i;
    cards[i].style.order = randIndex;
}
}

function checkMatch(flippedCard) {
    let pickedCards = document.querySelectorAll('.card.flippedCard .card-front img');
    let firstPick = pickedCards[0].id;
    let secondPick = pickedCards[1].id;
    
    if (firstPick == secondPick) {
        console.log("match");
        pickedCards.className = 'matched';
        return
    } else {
        setTimeout(() => {
            flippedCard[0].classList.remove('flippedCard');
            flippedCard[1].classList.remove('flippedCard');
            }, 1000);
        console.log("try again");
    }
}

// Flip cards
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
    cards[i].classList.add('flippedCard');
    let flippedCard = document.querySelectorAll('.card.flippedCard');
    
    if (flippedCard.length == 2) {
            console.log("it's two");
            checkMatch(flippedCard);
    
    }})}



// shuffle cards 

startBtn.addEventListener('click', function(){
    shuffleCards();
});
