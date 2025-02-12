const hand = document.getElementById('hand');
const dealerHand =document.getElementById('dealerHand')
let fullDeck = [];
let deck = [];
let colors = [
    "_of_diamonds.png",
    "_of_spades.png",
    "_of_clubs.png",
    "_of_hearts.png"
];

// Function to assign values to card elements
function assignValue(card, index) {
    if (index === 1) {
        card.dataset.value = 11; // Ace as 11 (can be adjusted later)
    } else if (index > 10) {
        card.dataset.value = 10; // Face cards (J, Q, K) are worth 10
    } else {
        card.dataset.value = index; // Number cards keep their value
    }
}

function hit(){
    const card = deck[0]
    hand.appendChild(card)
    handValue += Number(card.dataset.value)
    deck.shift()
    document.getElementById("winnerValue").textContent = `Score: ${handValue}`;
    console.log("Total hand value:", handValue);
    console.log("Cards left: "+ deck.length)
}
function stand(){
    const result = document.getElementById('result')
    if(handValue === dealerValue || handValue && dealerValue >21 ){
        result.innerHTML = 'Draw'
    } else if(handValue < dealerValue || handValue > 21 ){
        result.innerHTML = 'You lose'

    } else{
        result.innerHTML= 'You win'
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

// Copy fullDeck into deck for use
deck = [...fullDeck]; // Use spread operator to create a fresh copy

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
shuffle(deck);

// Deal 2 cards and calculate hand value
let handValue = 0;
let dealerValue= 0;
for (let i = 0; i < 2; i++) {
    const card = deck[0]; // Now deck contains actual <img> elements
    hand.appendChild(card); // Append the actual card element
    handValue += Number(card.dataset.value); // Convert dataset value to number
    deck.shift()
    const dealerCard = deck[0]
    dealerHand.appendChild(dealerCard)
    deck.shift()
    dealerValue += Number(dealerCard.dataset.value)
    console.log(dealerValue)
}

// Display the hand value
console.log("Total hand value:", handValue);
document.getElementById("winnerValue").textContent = `Score: ${handValue}`;
console.log(dealerValue)
console.log("Full Deck:", fullDeck);
