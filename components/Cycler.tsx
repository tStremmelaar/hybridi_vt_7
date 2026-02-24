import { StyleSheet, View } from "react-native";
import Slot from "./Slot";

export default function Cycler() {
  return (
    <View style={styles.cycler}>
      <Slot />
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  cycler: {
    flex: 2,
    flexDirection: 'row',
  },
})