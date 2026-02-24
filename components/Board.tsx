import { StyleSheet, View } from "react-native";
import Cycler from "./Cycler";
import Filler from "./Filler";
import Foundations from "./Foundations";

export default function Board() {
  return (
    <View style={styles.board}>
      <View style={styles.topRow}>
        <Cycler />
        <Filler />
        <Foundations />
      </View>
      <View style={styles.bottomRow}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomRow: {
    flex: 3,
    backgroundColor: '#00f',
    flexDirection: 'row',
  },
})