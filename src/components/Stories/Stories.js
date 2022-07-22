import React from "react";
import { FlatList, View } from "react-native";
import { StoryData } from "../../../assets/data/Data";
import Story from "../Story/Story";
import styles from "./styles";

const Stories = () => {
  return (
    <View style={styles.stories}>
      {
        <FlatList
          data={StoryData}
          renderItem={({ item }) => <Story story={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  );
};

export default Stories;
