import { Image, StyleSheet, View } from "react-native"

export default function CardBack() {
  return (
    <View style={styles.cardBack}>
      <Image
        style={styles.backImage}
        source={{ uri: 'https://deckofcardsapi.com/static/img/back.png' }}
        resizeMode={'stretch'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardBack: {
    flex: 1,
    margin: 3,
    aspectRatio: 113 / 157,
  },
  backImage: {
    width: '100%',
    height: '100%',
  },
})