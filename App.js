import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";

export default function App() {
  return (
    <View style={styles.text}>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
