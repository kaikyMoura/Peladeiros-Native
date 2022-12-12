import React, {useEffect, useState} from "react";
import {StatusBar} from "expo-status-bar";
import {View} from "react-native";

import CardList from "./CardList";
import SideBar from "./SideBar";
import Footer from "./Footer";

import {styles} from "./styles/HomeStyle";

const Home = ({navigation}) => {
    const [peladas, setPeladas] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch("http://192.168.15.38:19001/Home").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(data => {
            setPeladas(data.data.model);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <View style={styles.container}>
            <CardList
                data={peladas}
                navigation={navigation}
            />

            <SideBar
                visible={visible}
                navigation={navigation}
            />

            <Footer
                navigation={navigation}
                visible={visible}
                setVivible={setVisible}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

export default Home;