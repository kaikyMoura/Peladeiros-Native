import React from "react";
import {View, Image, Text} from "react-native";

import { styles } from "./styles/SideBarStyle";

const SideBar = ({visible, navigation}) => {

    const handleSignOut = () => {
        navigation.navigate("Inicial");
    };

    return(visible) ? (
        <View style={styles.container}>
            <Image source="#" style={styles.imageStyle}/>
            <Text style={styles.textLarge}>Nome</Text>
            <Text style={styles.textSmall} onPress={handleSignOut}>Sair</Text>
        </View>
    ) : "";
};

export default SideBar;