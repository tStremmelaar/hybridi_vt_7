import { Image, StyleSheet } from "react-native"

export default function CardBack() {
  return (
    <Image
      style={styles.cardBack}
      source={{ uri: 'https://deckofcardsapi.com/static/img/back.png' }}
      resizeMode={'cover'}
    />
  )
}

const styles = StyleSheet.create({
  cardBack: {
    width: '100%',
    height: '100%',
  },
})