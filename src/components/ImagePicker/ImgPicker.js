import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";

const ImgPicker = () => {
  const [selectedImage, setSelectedImage] = useState();

  const openImgPicker = async () => {
    const prmRst = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (prmRst.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: selectedImage?.localUri
            ? selectedImage?.localUri
            : "https://i.imgur.com/TkIrScD.png",
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
