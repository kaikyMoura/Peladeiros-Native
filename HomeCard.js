import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import { styles } from "./styles/HomeCardStyle";

const HomeCard = (props) => {
    const { name, date, subject, image, comment } = props;

    const handlerParticipante = (index) => {
        setIndexState(index);
        setCountParticipante(countParticipante+1);

        if (!showNotify) {
            setShowNotify(true);
        }
    }

    return (
        <View style={styles.cardStyle}>
            <Text style={styles.textSubjectStyle}>{subject}</Text>
            <View style={styles.lineRowStyle}>
                <Text style={styles.textNameStyle}>{name}</Text>
                
                <Text style={styles.textNameStyle}>{date}</Text>
            </View>
            <Image source={{ uri: image }} style={styles.imageStyle} />
            <Text style={styles.textNameStyle}>{comment}</Text>
            <Pressable style={styles.thumbsup}>
                <Image source={require('./assets/like.png')} />
            </Pressable>
            <Pressable style={styles.pressableStyle}>
                <Text style={styles.textPressableStyle}>Partipar</Text>
            </Pressable>
        </View>
    );
}

export default HomeCard;