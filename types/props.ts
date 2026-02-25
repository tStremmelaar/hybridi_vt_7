import { card } from "./types"

export type betProps = {
  bank: number
  startGame: (bet: number) => void
}

export type boardProps = {
  bet: number
  endGame: (winnings: number) => void
}

export type handProps = {
  hand: card[]
  points: number
}

export type cardProps = {
  card: card
}

export type actionsProps = {
  hit: () => void
  stand: () => void
}