import { drawResponse } from "../types/responses"
import { card } from "../types/types"

export default async function drawInitial(drawUrl: string) {
  try {
    const res = await fetch(`${drawUrl}?count=4`)
    if(!res.ok) {
      throw new Error(`Network response not OK: ${res.status} ${res.statusText}`)
    } else {
      const data: drawResponse = await res.json()
      return data
    }
  } catch (error) {
    throw new Error('Could not draw cards from deck', { cause: error })
  }
}