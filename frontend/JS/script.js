const hand = document.getElementById('hand')
let fullDeck = []
let deck =[]
let colors = [
    "_of_diamonds.png",
    "_of_spades.png",
    "_of_clubs.png",
    "_of_hearts.png" ]
for (let c = 0; c < colors.length; c++) {
    const element = colors[c];
    for (let i = 1; i < 14; i++) {
            const card =document.createElement('img')
            let cardSrc = "bilder/kortstokk/"+i + element  
            fullDeck.push(cardSrc)
            card.classList.add("kort")
        }
}
//lager en kopi av hele decket som skal brukes senere
deck = fullDeck



// fisher yates shuffle
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
shuffle(deck)
for (let i = 0; i < deck.length; i++) {
    const element = deck[i];
    const card =document.createElement('img')
    card.src = element
    card.classList.add("kort")
    hand.appendChild(card)
}

console.log(fullDeck)