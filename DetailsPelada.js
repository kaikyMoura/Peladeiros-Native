import React, {useEffect, useState} from "react";
import {StatusBar, SafeAreaView, ScrollView, View, Pressable, TextInput, Text} from "react-native";
import axios from "axios";

import UploadFile from "./UploadFile";

import {styles} from "./styles/DetailsPeladaStyle";

const DetailsPelada = ({navigation, route}) => {
    const [title, setTitle] = useState(route.params.titulo);
    const [subject, setSubject] = useState(route.params.assunto);
    const [media, setMedia] = useState(route.params.midia);
    const[isContext, setIsContext] = useState(route.params.isContext);

    useEffect(() => {
        setIsContext(true);
    }, []);

    const handleUpdatePelada = async () => {
        if(title !== '' && subject !== '' && media !== '') {
            const uid = route.params.uid;

            const update = {
                titulo: title,
                assunto: subject,
                midia: media
            };

            await axios.patch(`http://192.168.15.38:19001/Detalhes/${uid}`, update).then(res => {
                if(res.status === 200) {
                    navigation.navigate("Home");
                }
            });
        }
    };

    const handleDeletePelada = async () => {
        await axios.delete(`http://192.168.15.38:19001/Detalhes/${uid}`).then(res => {
            if(res.status === 204) {
                navigation.navigate("Home");
            }
        });
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
                    isContext={isContext}
                />

                <Pressable style={styles.presUpdateStyle} onPress={handleUpdatePelada}>
                    <Text style={styles.textPressableStyle}>Atualizar Pelada</Text>
                </Pressable>

                <Pressable style={styles.presDeleteStyle} onPress={handleDeletePelada}>
                    <Text style={styles.textPressableStyle}>Deletar Pelada</Text>
                </Pressable>
                
                <View style={{marginTop: 16}}>
                    <Text style={styles.textLinkStyle} onPress={()=> navigation.navigate("Home")}>Retornar a home</Text>
                </View>
            </ScrollView>
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default DetailsPelada;