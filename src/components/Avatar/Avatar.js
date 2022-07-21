import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const Avatar = ({ img }) => {
  return (
    <View>
      <Image style={styles.avatarImg} source={{ uri: img }} />
    </View>
  );
};

export default Avatar;
