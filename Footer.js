import React from "react";
import {Pressable, Text, Image, View} from "react-native";

import {styles} from "./styles/FooterStyle";

//import iconMenu from "./assets/icon_menu_dark.png";
//import iconAdded from "./assets/icon_add_dark.png";
//import iconPreview from "./assets/icon_preview_dark.png";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const PopupButtom = ({navigation, visible, setVivible}) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.presStyle} onPress={()=> setVivible(!visible)}>
                <Entypo name="menu" size={34} color="white" />
                <Text style={styles.textStyle}>Menu</Text>
            </Pressable>
            <Pressable style={styles.presStyle} onPress={()=> navigation.navigate("Criar")}>
                <MaterialIcons name="add" size={34} color="white" />
                <Text style={styles.textStyle}>Adicionar</Text>
            </Pressable>
            <Pressable style={styles.presStyle} onPress={()=> setVivible(!visible)}>
                <MaterialIcons name="preview" size={34} color="white" />
                <Text style={styles.textStyle}>Perfil</Text>
            </Pressable>
        </View>
    );
};

export default PopupButtom;