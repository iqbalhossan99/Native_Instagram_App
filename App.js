import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { View } from "react-native";
import Router from "./src/navigations/Router";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <Router />
    </View>
  );
}
