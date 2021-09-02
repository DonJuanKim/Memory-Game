const cards = document.querySelectorAll('div.card');
const startBtn = document.getElementById('overlay-start-text');
const countdown = document.getElementById('countdown');
const score = document.getElementById('score');
const gameover = document.getElementById('overlay-gameover-text');
const win = document.getElementById('overlay-win');
let points = 0;


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
        setTimeout(() => {
            flippedCard[0].className = 'card matched';
            flippedCard[1].className= 'card matched';
            }, 1000);
        points = points + 20;
        score.innerHTML = points;
        return points
    } else {
        setTimeout(() => {
            flippedCard[0].classList.remove('flippedCard');
            flippedCard[1].classList.remove('flippedCard');
            }, 1000);
        console.log("try again");
    }}


// Flip cards
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
    cards[i].classList.add('flippedCard');
    let flippedCard = document.querySelectorAll('.card.flippedCard');
    
    if (flippedCard.length == 2) {
            checkMatch(flippedCard);
    }})}



// countdown function

function reset() {
    
    const startingMinutes = 1;
    let time = startingMinutes * 60; 
    let refreshInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        let minutes = Math.floor(time / 60); 
        let seconds = time % 60;
        countdown.innerHTML = `${minutes} : ${seconds}`;
        time--;
   
        if (time < 0) { 
            clearInterval(refreshInterval);
            gameover.classList.add('visible');
            points = 0;
            return points
        } else if (points >= 180) {
            clearInterval(refreshInterval);
            win.classList.add('visible');
            points = 0;
            return points
        };
     }}

startBtn.addEventListener('click', function (){
    shuffleCards();
    startBtn.classList.remove('visible');
    reset();
});

gameover.addEventListener('click', function(){
    let matchedCards = document.querySelectorAll('div.card.matched');
    let flippedCard = document.querySelectorAll('div.card.flippedCard');
    if (flippedCard.length > 0){
    flippedCard[0].classList.remove('flippedCard');
    };
    for(let i=0; i < matchedCards.length; i++){
        matchedCards[i].classList.remove('matched');
    };
    shuffleCards();
    gameover.classList.remove('visible');
    reset();
});


win.addEventListener('click', function (){
    let matchedCards = document.querySelectorAll('div.card.matched');

    for(let i=0; i < matchedCards.length; i++){
        matchedCards[i].classList.remove('matched');
    };
    shuffleCards();
    win.classList.remove('visible');
    reset();
});
