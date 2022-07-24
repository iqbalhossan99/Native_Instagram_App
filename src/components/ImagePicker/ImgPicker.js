import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

import styles from "./styles";

const ImgPicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImgPicker = async () => {
    const prmRst = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (prmRst.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage?.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage?.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.imgur.com/TkIrScD.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      <TouchableOpacity onPress={openImgPicker} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImgPicker;
