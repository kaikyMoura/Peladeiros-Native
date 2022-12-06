import React from "react";
import {StatusBar} from "expo-status-bar";
import {View, TextInput, Pressable, Text} from "react-native";

import {styles} from "./styles/ChangePasswdStyle";

const ChangePasswd = ({navigation}) => {

    const saveChangePasswd = () => {
        navigation.navigate('Peladeiros');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.textTitleStyle}>Digite sua nona senha</Text>
            <TextInput placeholder="Senha" style={styles.inputStyle}/>
            <TextInput placeholder="Confirmar Senha" style={styles.inputStyle}/>
            <Pressable style={styles.pressableStyle} onPress={() => saveChangePasswd()}>
                <Text style={styles.textPressableStyle}>Sanha nova senha</Text>
            </Pressable>
            <View style={{marginTop: 16}}>
                <Text style={styles.textLinkStyle} onPress={() => saveChangePasswd()}>Retornar a página de login</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default ChangePasswd;