import ancientsGods from './ancientsGods.js';
import greenData from '../data/mythicCards/green/greenCards.js';
import brownData from '../data/mythicCards/brown/brownCards.js';
import blueData from '../data/mythicCards/blue/blueCards.js';
const ancientCard = document.querySelectorAll('.ancient-card')
const rowWraper = document.querySelectorAll('.row-wraper')
const deckElement = document.querySelectorAll('.deck-element')
const difficultyButton = document.querySelectorAll('.difficulty-button')
let cardsCount = [0, 0, 0]
ancientCard.forEach(el => {
  el.addEventListener('click', () => {
    cardsCount = [0, 0, 0]
    const index = Array.from(ancientCard).indexOf(el)
    rowWraper.forEach(row => {
      row.children[0].textContent = `${ancientsGods[index][`${row.id}`].greenCards}`;
      cardsCount[0] += ancientsGods[index][`${row.id}`].greenCards
      row.children[1].textContent = `${ancientsGods[index][`${row.id}`].brownCards}`;
      cardsCount[1] += ancientsGods[index][`${row.id}`].brownCards
      row.children[2].textContent = `${ancientsGods[index][`${row.id}`].blueCards}`;
      cardsCount[2] += ancientsGods[index][`${row.id}`].blueCards
    })
  })
})
let deck = [[], [], []]
let deckLength = [greenData.length,brownData.length ,blueData.length]
let randomNum
difficultyButton.forEach(el => {
  el.addEventListener('click', () => {
    console.log('green:', cardsCount[0], 'brown:', cardsCount[1], 'blue:', cardsCount[2]);
    push()
  })
})
function push() {
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
let gh =[greenData[randomNum],brownData[randomNum],blueData[randomNum]]
      if (deck[i].indexOf(gh[i]) === -1) {
        deck[i].push(gh[i])
        counter++
      }
    }
    counter = 0
  }
console.log(deck);
}