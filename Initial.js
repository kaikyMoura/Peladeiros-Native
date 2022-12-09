import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View, Image, TextInput, Pressable, Text} from "react-native";
import axios from "axios";

import logoIcon from "./assets/android-icon-72x72.png";

import {styles} from "./styles/InitialStyle";

const hostPath = `http://192.168.15.38:19001/Inicial`;

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
      if (account !== null && password !== null) {
        await fetch(hostPath).then(res => {
          if(res.ok) {
            return res.json();
          }
        }).then(data => {
          let users = data.data.model;
          users.map(user => {
            if(user.account === account && user.passwd === password) {
              const userCredential = {
                onstate: 1
              }
              axios.patch(`${hostPath}/${account}`, userCredential).then(res => {
                if(res.status === 200) {
                  navigation.navigate('Home');
                }
              });
            }
          });
        }).catch(error => {
          console.log(error);
        });
      }
    };

    const handleSubmitRegister = async () => {
      if (account !== null && password !== null && passwordConfirm === password) {
        const userCredential = {
          name: '',
          phone: '',
          email: '',
          account: account,
          passwd: password,
          avatar: '',
          onstate: 1
        }
        await axios.post(`http://192.168.15.38:19001/Inicial`, userCredential).then((response) => {
          if(response.status === 201) {
            navigation.navigate('Home');
          }
        });
      }
    };

    const openChangePasswdPage = () => {
      navigation.navigate('Alterar Senha');
    };

    return(
        <View style={styles.container}>
          <Image source={logoIcon} style={{marginBottom: 16}}/>
          <TextInput keyboardType="default" value={account} placeholder="Conta"
          onChangeText={(email) => setAccount(email)} style={styles.inputStyle}/>
          <TextInput keyboardType="visible-password" value={password} placeholder="Senha"
          onChangeText={(passwd) => setPassword(passwd)} style={styles.inputStyle}/>
          {isNewAccount && (<TextInput keyboardType="visible-password" value={passwordConfirm} placeholder="Confirmar Senha"
          onChangeText={(passwdConfirm) => setPasswordConfirm(passwdConfirm)} style={styles.inputStyle}/>)}
          <Pressable style={styles.pressableStyle} onPress={handleSubmit}>
            <Text style={styles.textPressableStyle}>{!isNewAccount ? 'Entrar' : 'Salvar credenciais'}</Text>
          </Pressable>
          <View style={{marginTop: 16}}>
          <Text style={styles.textLinkStyle} onPress={() => openChangePasswdPage()}>Esquci minha senha</Text>
          <Text style={styles.textLinkStyle} onPress={() => setIsNewAccount(!isNewAccount)}>{!isNewAccount ? 'Criar novo usuário' : 'Já tenho uma conta'}</Text>
          </View>
          <StatusBar style="auto" />
        </View>
    );
}

export default Initial;