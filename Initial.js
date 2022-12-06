import {StatusBar} from "expo-status-bar";
import {View, TextInput} from "react-native";

import {styles} from "./styles/InitialStyle";

import logoIcon from "./assets/android-icon-72x72.png";

const Initial = () => {
    return(
        <View style={styles.container}>
          <TextInput placeholder="Conta" style={styles.textInput}/>
          <StatusBar style="auto" />
        </View>
    );
}

export default Initial;