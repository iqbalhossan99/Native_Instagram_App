import React from "react";
import { Image, Text, View } from "react-native";
import noAvatar from "../../../assets/img/noAvatar.png";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const Avatar = ({ img, name, userPost }) => {
  const maxName = name.slice(0, 7);
  return (
    <View style={styles.avatarContainer}>
      <View style={userPost && styles.avatarLeft}>
        <Image
          style={styles.avatarImg}
          source={{ uri: img ? img : noAvatar }}
        />
        <Text style={styles.avatarName}>
          {userPost ? name : name.length >= 7 ? `${maxName}...` : name}
        </Text>
      </View>
      {/* avatar right fro user post */}
      <View>
        {userPost && (
          <Entypo name="dots-three-vertical" size={20} color="#fff" />
        )}
      </View>
    </View>
  );
};

export default Avatar;
