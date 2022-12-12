import React from "react";
import {Pressable, Text, Image, View} from "react-native";

import {styles} from "./styles/FooterStyle";

import iconMenu from "./assets/icon_menu_dark.png";
import iconAdded from "./assets/icon_add_dark.png";
import iconPreview from "./assets/icon_preview_dark.png";

const PopupButtom = ({navigation, visible, setVivible}) => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.presStyle} onPress={()=> setVivible(!visible)}>
                <Image source={iconMenu}/>
                <Text style={styles.textStyle}>Menu</Text>
            </Pressable>
            <Pressable style={styles.presStyle} onPress={()=> navigation.navigate("Criar")}>
                <Image source={iconAdded}/>
                <Text style={styles.textStyle}>Adicionar</Text>
            </Pressable>
            <Pressable style={styles.presStyle} onPress={()=> setVivible(!visible)}>
                <Image source={iconPreview}/>
                <Text style={styles.textStyle}>Visualizar</Text>
            </Pressable>
        </View>
    );
};

export default PopupButtom;