import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Board from './components/oldBoard';
import Game from './components/Game';

export default function App() {
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
