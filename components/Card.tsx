import { Image, StyleSheet, View } from "react-native";
import { cardProps } from "../types/props";
import CardBack from "./CardBack";

export default function Card(
  {props}: {props: cardProps}
) {
  return (
    <View style={styles.card}>
      {!(props.card.faceDown) && (
        <Image
          style={styles.image}
          source={{ uri: props.card.image }}
          resizeMode={'contain'}
        />
      )}
      {props.card.faceDown && (
        <Image
          style={styles.image}
          source={{ uri: 'https://deckofcardsapi.com/static/img/back.png' }}
          resizeMode={'stretch'}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    aspectRatio: 113 / 157,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})