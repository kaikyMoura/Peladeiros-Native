import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from "./Initial";
import ChangePasswd from "./ChangePasswd";
import Home from "./Home";
import CreatePelada from "./CreatePelada";
import DetailsPelada from "./DetailsPelada";
import { Image, Pressable, Text } from "react-native";
//import { AntDesign } from "@expo/vector-icons";
import iconAdded from "./assets/icon_add_dark.png";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {

    const LogoTitle = () => {
        return (
            <>
                <Image
                    style={{ width: 36, height: 36 }}
                    source={require('./assets/android-icon-white-36x36.png')}
                />
            </>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={Initial} />
                <Stack.Screen name="Alterar Senha" component={ChangePasswd} />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerTitle: (props) => <LogoTitle />,
                        headerStyle: {
                            backgroundColor: '#008786',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="Criar" component={CreatePelada}
                    options={{
                        headerTitle: (props) => <LogoTitle />,
                        headerStyle: {
                            backgroundColor: '#008786',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen name="Detalhes" component={DetailsPelada} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
