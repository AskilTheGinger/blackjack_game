const hand = document.getElementById('hand');
const dealerHand = document.getElementById('dealerHand')
const result = document.getElementById('result')
let fullDeck = [];
let deck = [];
let colors = [
    "_of_diamonds.png",
    "_of_spades.png",
    "_of_clubs.png",
    "_of_hearts.png"
];
let handValue = 0
let dealerValue = 0
let winstreak = 0

// Function to assign values to card elements
function assignValue(card, index) {
    if (index === 1) {
        card.dataset.value = 11
        card.classList.add("ace")
    } else if (index > 10) {
        card.dataset.value = 10; // Face cards (J, Q, K) are worth 10
    } else {
        card.dataset.value = index; // Number cards keep their value
    }
}

function restart() {
    deck = [...fullDeck];
    shuffle(deck);
    //soft reset
    handValue = 0
    dealerValue = 0
    dealerHand.innerHTML = ""
    hand.innerHTML = ""
    document.getElementById('winstreak').innerHTML = winstreak
    result.innerHTML=""

    // Deal 2 cards and calculate hand value
    for (let i = 0; i < 2; i++) {
        hit()
        dealerHit()

    }
    // Display the hand value
    console.log("Total hand value:", handValue);
    document.getElementById("winnerValue").textContent = `Score: ${handValue}`;
    console.log(dealerValue)
    console.log("Full Deck:", fullDeck);


}

function hit() {
    
    const card = deck[0]
    hand.appendChild(card)
    const essIErmet = hand.querySelectorAll('.ace')
    
    handValue += Number(card.dataset.value)
    deck.shift()
    

    for (let i = 0; i < essIErmet.length; i++) {
        if(handValue >21){
           const ess = essIErmet[0]
           handValue = handValue - 10
           ess.classList.remove('ace')
            console.log('ace changed')
        }
        
    }
    document.getElementById("winnerValue").textContent = `Score: ${handValue}`;
    console.log("Total hand value:", handValue);
    console.log("Cards left: " + deck.length)
}
function dealerHit(interval) {
    console.log("dealer hand =" + dealerHand.querySelector('img'))
    const dealerCard = deck[0]
    if (dealerHand.querySelector('img') == null) {
        dealerCard.dataset.cardImage = dealerCard.src
        dealerCard.src = "bilder/kortBakgrunn.webp"
        console.log("url" + dealerCard.dataset.cardImage)
    }
    dealerHand.appendChild(dealerCard)

    deck.shift()
    dealerValue += Number(dealerCard.dataset.value)
    console.log(dealerValue)


    if (dealerValue > 18 || dealerValue > handValue || handValue > 21) {
        clearInterval(interval)
        if(dealerHand.querySelectorAll('img').length>2){
            stand()
        }
       
    }
}


function stand() {
    
    //removes the hidden card
    const firstCard = dealerHand.querySelector('img')
    let hitting = true

    firstCard.src = firstCard.dataset.cardImage
    
    if ((dealerValue > 18 || dealerValue > handValue || handValue > 21)){
        console.log('process done')
        if (handValue === dealerValue ||  (handValue>21 && dealerValue > 21)) {
            result.innerHTML = 'Draw'
    
        } else if ((handValue > dealerValue || dealerValue > 21) && handValue<=21) {
            result.innerHTML = 'You win'
            winstreak += 1
        } else {
            result.innerHTML = 'You lose'
            winstreak = 0
        }
        result.innerHTML += "<button onclick= restart()> Prøv igjen? </button>"
    } else {
        const dealerhits = setInterval(function () { dealerHit(dealerhits) }, 300)
    
   
}
}

// Create the full deck
for (let c = 0; c < colors.length; c++) {
    for (let i = 1; i < 14; i++) {
        const card = document.createElement('img'); // Create <img> element
        card.src = "bilder/kortstokk/" + i + colors[c];
        assignValue(card, i); // Assign value properly
        card.classList.add("kort");
        fullDeck.push(card); // Store the actual card elements, not just the paths
    }
}




// Fisher-Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
}
restart()