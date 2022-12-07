import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

import { styles } from "./styles/HomeStyle";
import { ImageHeader } from "./headerbar";

const Home = () => {
    return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <StatusBar style="auto" />
            </View>
    );
}

export default Home;