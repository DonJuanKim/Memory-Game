var cards = document.querySelectorAll('div.card');

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(){
    cards[i].classList.toggle('flipCard');
    });
};

// function selectCard(e) {
//         e = e || window.event;
//         e = e.target || e.srcElement;
//         console.log("className: " + e.classList);
//     }