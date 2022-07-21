import React from "react";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import Stories from "../../components/Stories/Stories";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <Stories />
    </View>
  );
};

export default HomeScreen;
