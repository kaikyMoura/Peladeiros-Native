import React from "react";
import {TouchableWithoutFeedback, View, Image, Text} from "react-native";

import {styles} from "./styles/HomeCardStyle";

const HomeCard = ({uid, conta, campo, bairro, endereco, privado, midia, titulo, assunto, datainicial, navigation}) => {
    const handleContextPelada = () => {
        const context = {
            uid: uid,
            conta: conta,
            campo: campo,
            bairro: bairro,
            endereco: endereco,
            privado: privado,
            midia: midia,
            titulo: titulo,
            assunto: assunto,
            datainicial: datainicial,
            isContext: false,
        };

        navigation.navigate("Detalhes", context);
    };

    return(
        <TouchableWithoutFeedback onPress={handleContextPelada}>
            <View style={styles.cardStyle}>
                <View style={styles.lineRowStyle}>
                    <Image source="#" style={styles.avatarStyle}/>
                    <Text style={styles.textSmallStyle}>{conta}</Text>
                    <Text style={styles.textSmallStyle}>{datainicial}</Text>
                </View>
                <View>
                    <Text style={styles.textTitleStyle}>{titulo}</Text>
                    <Text style={styles.textSubjectStyle}>{assunto}</Text>
                </View>
                <Image source={{uri: midia}} style={styles.imageStyle}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default HomeCard;