import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

import native from "../../../assets/img/native.jpg";
import Avatar from "../Avatar/Avatar";
import LikeComment from "../LikeComment/LikeComment";

const Post = ({ post }) => {
  console.log(post);
  const { img, title, desc, username, userImg } = post;
  const maxDesc = desc.slice(0, 100);
  return (
    <View style={styles.postContainer}>
      <Avatar img={userImg} name={username} userPost={"userPost"} />
      <Image style={styles.postImg} source={{ uri: img }} />{" "}
      <Text style={{ color: "#FFF" }}>{title}</Text>
      <Text style={{ color: "#FFF" }}>{maxDesc}... more</Text>
      <LikeComment />
    </View>
  );
};

export default Post;
