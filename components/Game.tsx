import { useState } from "react"
import { StyleSheet, View } from "react-native"
import Bet from "./Bet"

export default function Game() {
  const [gameInProgress, setGameInProgress] = useState<boolean>(false)
  const [bank, setBank] = useState<number>(900)
  const [bet, setBet] = useState<number>(0)

  function startGame(bet: number) {
    setBet(bet)
    setBank(bank - bet)
  }

  return (
    <View style={styles.game}>
      {!gameInProgress && (
        <Bet props={{bank, startGame}} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
  }
})