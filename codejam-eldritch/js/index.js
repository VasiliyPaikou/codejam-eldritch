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
let deckLength = [greenData.length, brownData.length, blueData.length]
let randomNum
difficultyButton.forEach(el => {
  el.addEventListener('click', () => {
    console.log('Количество по цветам');
    console.log('green:', cardsCount[0], 'brown:', cardsCount[1], 'blue:', cardsCount[2]);
    pushOne()
  })
})
function pushOne() {
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      let gh = [greenData[randomNum], brownData[randomNum], blueData[randomNum]]
      if (deck[i].indexOf(gh[i]) === -1) {
        deck[i].push(gh[i])
        counter++
      }
    }
    counter = 0
  }
  console.log('deck');
  console.log(deck);
  pushDeck()
}
let deckStage = [[], [], []]
let deckPushDeck = []
function pushDeck() {
  let count = 0
  rowWraper.forEach(row => {
    for (let i = 0; i < 3; i++) {
      let counter = 0
      while (counter < +(row.children[i].textContent)) {
        let min = Math.ceil(0);
        let max = Math.floor(deck[i].length);
        randomNum = Math.floor(Math.random() * (max - min)) + min;
        deckStage[count].push(deck[i][randomNum])
        deck[i].splice(randomNum, 1)
        counter++
      }
    }
    count++
  })
  for (let i = 0; i < deckStage.length; i++) {
    console.log(deckStage[i]);
    let rr = 0
    let dd = deckStage[i].length
    while (rr < dd) {
      let min = Math.ceil(0);
      let max = Math.floor(deckStage[i].length);
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      deckPushDeck.push(deckStage[i][randomNum])
      deckStage[i].splice(randomNum, 1)
      rr++
    }
  }
console.log(deckPushDeck);
}
const deckCards = document.querySelector('.deck-cards')
const activeCard = document.querySelector('.active-card')
const titleRow = document.querySelector('.title-row')
const green = document.querySelectorAll('.green')
const brown = document.querySelectorAll('.brown')
const blue = document.querySelectorAll('.blue')
let colorGroup =[green,brown,blue]
let counter = 0
let allColor = ['green','brown','blue']
deckCards.addEventListener('click', () => {
  activeCard.src = deckPushDeck[counter].img
  allColor.forEach(el=>{
    if (deckPushDeck[counter].color === el) {
      let fake = 0
      colorGroup[allColor.indexOf(el)].forEach(el =>{
    if (el.textContent !== '0' && fake === 0) {
      el.textContent = `${el.textContent - 1}`
      fake +=1
    }
      })
     } 
  })
  counter++
})
