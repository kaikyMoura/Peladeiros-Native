import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "react-native-gesture-handler";

import Initial from "./Initial";
import ChangePasswd from "./ChangePasswd";
import Home from "./Home";
import { Alert, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { CreatePelada } from "./src/views/createpelada";


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {

    function LogoTitle() {
        return (
            <Image
                style={{ width: 36, height: 36 }}
                source={require('./assets/android-icon-white-36x36.png')}
            />
        );
    }

    const navegateToCreatePelada = () => {
        navigation.navigate('Criar pelada')
    }

    //Ainda n ta funcionando
    function Create() {
        return (
                <AntDesign onPress={() => navegateToCreatePelada() } name="plus" size={24} color="white" />
        )
    }

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Inicial" component={Initial} />
                    <Stack.Screen name="Alterar Senha" component={ChangePasswd} />
                    <Stack.Screen name="Home" component={Home}
                        options={{
                            headerTitle: (props) => <LogoTitle />,
                            headerRight: (props) => <Create />,
                            headerStyle: {
                                backgroundColor: '#008786',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen name="Criar pelada" component={CreatePelada}
                        options={{
                            headerTitle: (props) => <LogoTitle />,
                            headerStyle: {
                                backgroundColor: '#008786',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}