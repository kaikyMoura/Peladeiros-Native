import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, Text } from "react-native";

import { styles } from "./styles/HomeStyle";
import HomeCard from "./HomeCard";
import { MyTabs } from "./src/views/routes";
import { CreatePelada } from "./src/views/createpelada";
//import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const users = [
    {
        name: "Ismael",
        date: "Data: 10-09-2022",
        subject: "CAMPO DO FLUMINENSE",
        comment: "Pelada de amigos já realizada a 2 anos, agora pensando convidar novos jogadores",
        image: "https://recifebomdebola.com.br/wp-content/uploads/2017/12/091217-recife-bom-de-bola-foto-inaldo-lins-pcr-8.jpg",
    },
    {
        name: "Preta",
        date: "Data: 12-09-2022",
        subject: "CAMPO DO NOVAIS FILHO",
        comment: "Pelada realizada com o intuito de descontração",
        image: "https://recifebomdebola.com.br/wp-content/uploads/2022/06/03__1_-compress1.jpg",
    },
    {
        name: "Vinicius",
        date: "Data: 03-09-2022",
        subject: "CAMPO DO INTERCLUBES (CADUCO)",
        comment: "Pelada mais competitiva com premiações aos vencedores",
        image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/img_2186_0.jpg?itok=8GdIDzRW",
    },
]

//const Tab = createBottomTabNavigator();
// O Botão é só pra testar se a navegação ta funcionando
const Home = ( { navigation }) => {

    const goToCreatePelada = () =>{
        navigation.navigate('Criar pelada');
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <HomeCard subject="CAMPO DO FLUMINENSE" name="Ismael" date="Data: 10-09-2022"
                    image="https://recifebomdebola.com.br/wp-content/uploads/2017/12/091217-recife-bom-de-bola-foto-inaldo-lins-pcr-8.jpg"
                    comment="Pelada de amigos já realizada a 2 anos, agora pensando convidar novos jogadores"
                />
                <HomeCard subject="CAMPO DO NOVAIS FILHO" name="Preta" date="Data: 12-09-2022"
                    image="https://recifebomdebola.com.br/wp-content/uploads/2022/06/03__1_-compress1.jpg"
                    comment="Pelada realizada com o intuito de descontração"
                />
                <HomeCard subject="CAMPO DO INTERCLUBES (CADUCO)" name="Vinicius" date="Data: 03-09-2022"
                    image="https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/img_2186_0.jpg?itok=8GdIDzRW"
                    comment="Pelada mais competitiva com premiações aos vencedores"
                />
                <StatusBar style="auto" />
                
                <Button title="navegar" onPress={() => goToCreatePelada()} />
            </ScrollView>            
            {/*<NavigationContainer independent={true}>
                <Tab.Navigator sceneContainerStyle={{
                    backgroundColor: "#008786",
                }}>
                    <Tab.Screen name="Home" component={Home} />
                </Tab.Navigator>
            </NavigationContainer>*/}
        </>
    );
}

export default Home;