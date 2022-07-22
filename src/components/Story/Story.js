import React from "react";
import { Text, View } from "react-native";
import Avatar from "../Avatar/Avatar";
import styles from "./styles";

const Story = ({ story }) => {
  // console.log(story.name);
  const { img, name } = story;
  const maxName = name.slice(0, 7);
  return (
    <View style={styles.story}>
      <Avatar img={img} name={name} />
      {/* <Text style={styles.storyName}>
        {name.length >= 7 ? `${maxName}...` : name}
      </Text> */}
    </View>
  );
};

export default Story;
