import React from "react";
import { FlatList, View } from "react-native";
import { BlogData } from "../../../assets/data/Data";
import Post from "../Post/Post";
import Avatar from "../Avatar/Avatar";
import styles from "./styles";

const Feed = () => {
  return (
    <View style={styles.feedContainer}>
      <FlatList
        data={BlogData}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default Feed;
