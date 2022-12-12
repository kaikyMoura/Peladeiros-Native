import React, {useState} from "react";
import {StatusBar, SafeAreaView, ScrollView, View, Pressable, TextInput, Text} from "react-native";
import axios from "axios";

import UploadFile from "./UploadFile";

import {styles} from "./styles/CreatePeladaStyle";

const nowDate = new Date();

const CreatePelada = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [media, setMedia] = useState('');

    const handleCreatePelada = () => {
        if(title !== '' && subject !== '' && media !== '') {
            const context = {
                conta: "Ismael",
                senha: "pass1111",
                campo: "Nome do Campo",
                bairro: "Nome do Bairo",
                endereco: "Endereço",
                privado: "Não",
                midia: media,
                titulo: title,
                assunto: "Vamos jogar",
                datainicial: nowDate.toDateString(),
            };

            axios.post("http://192.168.15.38:19001/Criar", context).then(res => {
                if(res.status === 201) {
                    navigation.navigate("Home");
                }
            });
        }
    };

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollStyle}>
                {title === '' && (<Text style={styles.textErrorStyle}>Campos Obrigatórios!</Text>)}

                <TextInput keyboardType="default" value={title} placeholder="Título"
                onChangeText={(title)=> setTitle(title)} style={styles.inputStyle}/>

                <TextInput keyboardType="default" value={subject} placeholder="Assunto"
                onChangeText={(subject)=> setSubject(subject)} style={styles.inputStyle}/>

                <UploadFile
                    media={media}
                    setMedia={setMedia}
                    isContext={false}
                />

                <Pressable style={styles.presCreateStyle} onPress={handleCreatePelada}>
                    <Text style={styles.textPressableStyle}>Salvar Pelada</Text>
                </Pressable>
                
                <View style={{marginTop: 16}}>
                    <Text style={styles.textLinkStyle} onPress={()=> navigation.navigate("Home")}>Retornar a home</Text>
                </View>
            </ScrollView>
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default CreatePelada;