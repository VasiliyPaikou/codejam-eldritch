import ancientsGods from './ancientsGods.js';
import greenData from '../data/mythicCards/green/greenCards.js';
import brownData from '../data/mythicCards/brown/brownCards.js';
import blueData from '../data/mythicCards/blue/blueCards.js';
const ancientCard = document.querySelectorAll('.ancient-card')
const rowWraper = document.querySelectorAll('.row-wraper')
const difficultyButton = document.querySelectorAll('.difficulty-button')
const difficultContainer = document.querySelector('.difficulty-container')
const deckContainer = document.querySelector('.deck-container')
const deckButton = document.querySelector('.deck-button')
let cardsCount = [0, 0, 0]

ancientCard.forEach(el => {
  el.addEventListener('click', () => {
    difficultContainer.classList.add('difficulty-active')
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

difficultyButton.forEach(el => {
  el.addEventListener('click', () => {
    deckButton.classList.add('button-active')
  })
})

deckButton.addEventListener('click', () => {
  pushDeck()
  deckContainer.classList.add('deck-active')
})

let deck = [[], [], []]
let deckLength = [greenData.length, brownData.length, blueData.length]
let randomNum

const veryEasy = document.querySelector('.veryeasy')
const easy = document.querySelector('.easy')
const normal = document.querySelector('.normal')
const hard = document.querySelector('.hard')
const veryHard = document.querySelector('.veryhard')
veryEasy.addEventListener('click', veryEasyDeck)
easy.addEventListener('click', easyDeck)
normal.addEventListener('click', normalDeck)
hard.addEventListener('click', hardDeck)
veryHard.addEventListener('click', veryHardDeck)


// набор карт для очень легкого уровня сложности
function veryEasyDeck() {
  console.log('hahaha!!');
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      let gh = [greenData[randomNum], brownData[randomNum], blueData[randomNum]]
      if (counter < 5) {
        console.log('<5');
        if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'easy') {
          deck[i].push(gh[i])
          counter++
        }
      }
      if (counter >= 5) {
        console.log('>5');
        if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'normal') {
          deck[i].push(gh[i])
          counter++
        }
      }
    }
    counter = 0
  }
}
// набор карт для легкого уровня сложности
function easyDeck() {
  console.log('normal');
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      let gh = [greenData[randomNum], brownData[randomNum], blueData[randomNum]]
      if (gh[i].difficulty !== 'hard') {
        if (deck[i].indexOf(gh[i]) === -1) {
          deck[i].push(gh[i])
          counter++
        }
      }
    }
    counter = 0
  }
  console.log('deck');
  console.log(deck);
}
// набор карт для нормального уровня сложности
function normalDeck() {
  console.log('normal');
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
}
// набор карт для сложного уровня сложности
function hardDeck() {
  console.log('normal');
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      let gh = [greenData[randomNum], brownData[randomNum], blueData[randomNum]]
      if (gh[i].difficulty !== 'easy') {
        if (deck[i].indexOf(gh[i]) === -1) {
          deck[i].push(gh[i])
          counter++
        }
      }
    }
    counter = 0
  }
  console.log('deck');
  console.log(deck);
}
// набор карт для очень сложного уровня сложности
function veryHardDeck() {
  console.log('veryHard');
  let counter = 0
  for (let i = 0; i < deck.length; i++) {
    let min = Math.ceil(0);
    let max = Math.floor(deckLength[i]);
    while (counter < cardsCount[i]) {
      randomNum = Math.floor(Math.random() * (max - min)) + min;
      let gh = [greenData[randomNum], brownData[randomNum], blueData[randomNum]]
      if (counter < 5) {
        console.log('<5');
        if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'hard') {
          deck[i].push(gh[i])
          counter++
        }
      }
      if (counter >= 5) {
        console.log('>5');
        if (deck[i].indexOf(gh[i]) === -1 && gh[i].difficulty == 'normal') {
          deck[i].push(gh[i])
          counter++
        }
      }
    }
    counter = 0
  }
}
let deckStage = [[], [], []]
let deckPushDeck = []
// создание колоды из собранного набора
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
let colorGroup = [green, brown, blue]
let counter = 0
let allColor = ['green', 'brown', 'blue']
// изменение информации об оставшихся картах
deckCards.addEventListener('click', () => {
  activeCard.src = deckPushDeck[counter].img
  allColor.forEach(el => {
    if (deckPushDeck[counter].color === el) {
      let fake = 0
      colorGroup[allColor.indexOf(el)].forEach(el => {
        if (el.textContent !== '0' && fake === 0) {
          el.textContent = `${el.textContent - 1}`
          fake += 1
        }
      })
    }
  })
  counter++
})
