import React from "react";
import { SafeAreaView, View } from "react-native";
import Feed from "../../components/Feed/Feed";
import Header from "../../components/Header/Header";
import Stories from "../../components/Stories/Stories";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Header />
      <Stories />
      <Feed />
    </SafeAreaView>
  );
};

export default HomeScreen;
