const hand = document.getElementById('hand')
let fullDeck = []
let deck = []
let colors = [
    "_of_diamonds.png",
    "_of_spades.png",
    "_of_clubs.png",
    "_of_hearts.png" ]
for (let c = 0; c < colors.length; c++) {
    const element = colors[c];
    for (let i = 1; i < 14; i++) {
            const card =document.createElement('img')
            card.src = "bilder/kortstokk/"+i + element  
            console.log(card)
            fullDeck.push(card.src)
            hand.appendChild(card)
            card.classList.add("kort")
        }
}

console.log(fullDeck)