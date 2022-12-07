import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View, Image, TextInput, Pressable, Text} from "react-native";

import logoIcon from "./assets/android-icon-72x72.png";

import {styles} from "./styles/InitialStyle";

const Initial = ({navigation}) => {
    const [isNewAccount, setIsNewAccount] = useState(false);

    const HandleSubmit = () => {
      navigation.navigate('Home');
    };

    const openChangePasswdPage = () => {
      navigation.navigate('Alterar Senha');
    };

    return(
        <View style={styles.container}>
          <Image source={logoIcon} style={{marginBottom: 16}}/>
          <TextInput placeholder="Conta" style={styles.inputStyle}/>
          <TextInput placeholder="Senha" style={styles.inputStyle}/>
          {isNewAccount && (<TextInput placeholder="Confirmar Senha" style={styles.inputStyle}/>)}
          <Pressable style={styles.pressableStyle} onPress={() => HandleSubmit()}>
            <Text style={styles.textPressableStyle}>{!isNewAccount ? 'Entrar' : 'Salvar credenciais'}</Text>
          </Pressable>
          <View style={{marginTop: 16}}>
          <Text style={styles.textLinkStyle} onPress={() => openChangePasswdPage()}>Esqueci minha senha</Text>
          <Text style={styles.textLinkStyle} onPress={() => setIsNewAccount(!isNewAccount)}>{!isNewAccount ? 'Criar novo usuário' : 'Já tenho uma conta'}</Text>
          </View>
          <StatusBar style="auto" />
        </View>
    );
}

export default Initial;