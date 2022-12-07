import React from "react";
import {View, Image, TextInput, Pressable, Text} from "react-native";

import {styles} from "./styles/HomeCardStyle";

const HomeCard = (props) => {
    const {name, date, subject, image, comment} = props;

    return(
        <View style={styles.cardStyle}>
            <Text style={styles.textSubjectStyle}>{subject}</Text>
            <View style={styles.lineRowStyle}>
                <Text style={styles.textNameStyle}>{name}</Text>
                <Text style={styles.textNameStyle}>{date}</Text>
            </View>
            <Image source={{uri: image}} style={styles.imageStyle}/>
            <Text style={styles.textNameStyle}>{comment}</Text>
        </View>
    );
}

export default HomeCard;