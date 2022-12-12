import React, {useState} from "react";
import {View, Pressable, Image, Text} from "react-native";
import * as ImagePicker from "expo-image-picker";

import {styles} from "./styles/UploadFileStyle";

import iconUpload from "./assets/icon_upload_dark.png";

const UploadFile = ({media, setMedia, isContext}) => {
  const[isCanceled, setIsCanceled] = useState(false);

  const pickerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled) {
      setMedia(result.assets[0].uri);
      setIsCanceled(true);
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>Buscar Imagem</Text>
      <Pressable style={styles.presStyle} onPress={pickerImage}>
          <Image source={iconUpload}/>
      </Pressable>
      {(isCanceled || isContext) && (<Image source={{uri: media}} style={styles.imageStyle}/>)}
    </View>
  );
}

export default UploadFile;