import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Initial from "./Initial";
import ChangePasswd from "./ChangePasswd";
import Home from "./Home";
import CreatePelada from "./CreatePelada";
import DetailsPelada from "./DetailsPelada";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={Initial}/>
                <Stack.Screen name="Alterar Senha" component={ChangePasswd}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Criar" component={CreatePelada}/>
                <Stack.Screen name="Detalhes" component={DetailsPelada}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
