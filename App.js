import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Initial from "./Initial";
import ChangePasswd from "./ChangePasswd";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={Initial}/>
                <Stack.Screen name="Alterar Senha" component={ChangePasswd}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}