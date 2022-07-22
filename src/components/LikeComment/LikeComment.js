import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const LikeComment = () => {
  return (
    <View style={styles.lcContainer}>
      <View style={styles.lcLeft}>
        <TouchableOpacity>
          <Feather name="thumbs-up" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.cmnText}>Comment...</Text>
      </View>
    </View>
  );
};

export default LikeComment;
