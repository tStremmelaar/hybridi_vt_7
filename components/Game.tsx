import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import Bet from "./Bet"
import Board from "./Board"
import { card } from "../types/types"

export default function Game() {
  const [gameInProgress, setGameInProgress] = useState<boolean>(false)
  const [bank, setBank] = useState<number>(900)
  const [bet, setBet] = useState<number>(0)
  const [timePassed, setTimePassed] = useState<boolean>(false)

  useEffect(() => {
    if (timePassed) {
      setGameInProgress(false)
    }
  }, [timePassed])

  function startGame(bet: number) {
    setTimePassed(false)
    setBet(bet)
    setBank(bank - bet)
    setGameInProgress(true)
  }

  async function endGame(winnings: number) {
    setBank(bank + winnings)
    setTimeout(() => {setTimePassed(true)}, 5000)
  }

  return (
    <View style={styles.game}>
      {!gameInProgress && (
        <Bet props={{bank, startGame}} />
      )}
      {gameInProgress && (
        <Board props={{bet, endGame}} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
  }
})