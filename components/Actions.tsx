import { Pressable, StyleSheet, Text, View } from "react-native";
import { actionsProps } from "../types/props";

export default function Actions({props}: {props: actionsProps}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.hit}>
        <Text style={styles.button}>Hit</Text>
      </Pressable>
      <Pressable onPress={props.stand}>
        <Text style={styles.button}>Stand</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 10,
  },
})