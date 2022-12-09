import React from "react";
import {StatusBar} from "expo-status-bar";
import {View, TextInput, Pressable, Text} from "react-native";

import {styles} from "./styles/ChangePasswdStyle";

const ChangePasswd = ({navigation}) => {

    const saveChangePasswd = () => {
        navigation.navigate('Login');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.textTitleStyle}>Digite sua nova senha</Text>
            <TextInput placeholder="Senha" style={styles.inputStyle}/>
            <TextInput placeholder="Confirmar Senha" style={styles.inputStyle}/>
            <Pressable style={styles.pressableStyle} onPress={() => saveChangePasswd()}>
                <Text style={styles.textPressableStyle}>Salvar senha</Text>
            </Pressable>
            <View style={{marginTop: 16}}>
                <Text style={styles.textLinkStyle} onPress={() => saveChangePasswd()}>Retornar a página de login</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default ChangePasswd;