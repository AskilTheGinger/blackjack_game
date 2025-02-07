const hand = document.getElementById('hand')
let fullDeck = []
let deck =[]
let colors = [
    "_of_diamonds.png",
    "_of_spades.png",
    "_of_clubs.png",
    "_of_hearts.png" ]
// assigns each card with a value
    function assignValue(item, index){
    if(index == 1){
        item.dataset.value = 11
    } else if (index > 10){
        item.dataset.value = 10
    } else{
        item.dataset.value = index
    }
    console.log(item.dataset, item)
}

for (let c = 0; c < colors.length; c++) {
    const element = colors[c];
    for (let i = 1; i < 14; i++) {
            const card =document.createElement('img')
            let cardSrc = "bilder/kortstokk/"+i + element  
            assignValue(cardSrc, i)
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

handValue = 0
for (let i = 0; i < 2; i++) {
    const element = deck[i];
    const card =document.createElement('img')
    card.src = element
    card.classList.add("kort")
    hand.appendChild(card)
    handValue += card.dataset.value
    console.log(handValue)
    document.getElementById("winnerValue")
}

console.log(fullDeck)