import { StyleSheet, View } from "react-native";
import Slot from "./Slot";

export default function Foundations() {
  return (
    <View style={styles.foundations}>
      <Slot />
      <Slot />
      <Slot />
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  foundations: {
    flex: 4,
    flexDirection: 'row',
  },
})