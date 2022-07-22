import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require("../../../assets/img/instagram-logo.png")}
      />
      <View style={styles.rHead}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="#fff" />{" "}
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="message1" size={24} color="#fff" />{" "}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
