import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />
    </View>
  );
};

export default HomeScreen;
