import { deckResponse } from "../types"

export default async function createDeck(): Promise<deckResponse> {
  try {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    if(!res.ok) {
      throw new Error(`Network response not OK: ${res.status} ${res.statusText}`)
    } else {
      const data: deckResponse = await res.json()
      return data
    }
  } catch (error) {
    throw new Error('Failed to create deck', { cause: error })
  }
}