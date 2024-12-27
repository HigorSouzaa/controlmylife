import { StyleSheet, View } from "react-native";
import SplashScreen from "./src/telas/splashScreen/splashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar toda a altura disponível
  },
});
