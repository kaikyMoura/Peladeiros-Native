import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from "./Initial";
import ChangePasswd from "./ChangePasswd";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Peladeiros" component={Initial} />
                <Stack.Screen name="Alterar Senha" component={ChangePasswd} />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerStyle: {
                            backgroundColor: '#008786',
                            marginTop: 16,
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}