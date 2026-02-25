import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from './components/Game';

export default function App() {
  // A game of blackjack. Cards and the deck logic are from deckofcardsapi.com.

  return (
    <SafeAreaView style={styles.safeArea}>
      <Game />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#161'
  },
});
