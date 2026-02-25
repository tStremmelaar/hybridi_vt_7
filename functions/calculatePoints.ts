import { card } from "../types/types";

function calculatePoint(hand: card[]) {
  let aces = 0
  let points = 0
  hand.forEach((card, index) => {
    if (card.value === 'ACE') {
      aces++
      console.log('aces: ' + aces)
    } else if (['JACK', 'QUEEN', 'KING'].includes(card.value)) {
      points += 10
      console.log(card.value + ' added 10: ' + points)
    } else {
      points += Number(card.value)
      console.log(`${card.value} added ${Number(card.value)}: ${points}`)
    }
  })
  if (aces > 0 && (points + 10 + aces) <= 21) {
    points += (10 + aces)
  } else {
    points += aces
  }
  
  return points
}

export default function calculatePoints(dealerHand: card[], playerHand: card[]) {
  const dealerPoint = calculatePoint(dealerHand)
  const playerPoint = calculatePoint(playerHand)
  return [dealerPoint, playerPoint]
}