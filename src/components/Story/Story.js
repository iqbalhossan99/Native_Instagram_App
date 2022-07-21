import React from "react";
import { Text, View } from "react-native";
import Avatar from "../Avatar/Avatar";
import styles from "./styles";

const Story = ({ story }) => {
  console.log(story.name);
  const { img, name } = story;
  return (
    <View style={styles.story}>
      <Avatar img={img} />
      <Text style={styles.storyName}>{name}</Text>
    </View>
  );
};

export default Story;
