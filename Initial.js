import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View, Image, TextInput, Pressable, Text} from "react-native";

import logoIcon from "./assets/android-icon-96x96(green).png";

import {styles} from "./styles/InitialStyle";

const nowDate = new Date();

const Initial = ({navigation}) => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isNewAccount, setIsNewAccount] = useState(false);

    const handleSubmit = () => {
      if (isNewAccount) {
        handleSubmitRegister();
      } else {
        handleSubmitLogin();
      }
    };

    const handleSubmitLogin = async () => {
      if (account !== null && password !== null && passwordConfirm === password) {
        navigation.navigate('Home');
      }
    };

    const handleSubmitRegister = async () => {
      if (account !== null && password !== null && passwordConfirm === password) {
        navigation.navigate('Home');
      }
    };

    const openChangePasswdPage = () => {
      navigation.navigate('Alterar Senha');
    };

    return(
        <View style={styles.container}>
          <Image source={logoIcon} style={{marginBottom: 16}}/>
          <TextInput keyboardType="email-address" value={account.trim()} placeholder="Conta"
          onChangeText={(email) => setAccount(email.trim())} style={styles.inputStyle}/>
          <TextInput keyboardType="visible-password" value={password.trim()} placeholder="Senha"
          onChangeText={(passwd) => setPassword(passwd.trim())} style={styles.inputStyle}/>
          {isNewAccount && (<TextInput keyboardType="visible-password" value={passwordConfirm.trim()} placeholder="Confirmar Senha"
          onChangeText={(passwdConfirm) => setPasswordConfirm(passwdConfirm.trim())} style={styles.inputStyle}/>)}
          <Pressable style={styles.pressableStyle} onPress={handleSubmit}>
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