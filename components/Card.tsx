import { Image, StyleSheet, View } from "react-native";
import { cardProps } from "../types/props";
import CardBack from "./CardBack";

export default function Card(
  {props}: {props: cardProps}
) {
  return (
    <View style={styles.card}>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 3,
    aspectRatio: 113 / 157,
  }
})