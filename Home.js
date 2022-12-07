import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, TextInput, Pressable, Text, ScrollView } from "react-native";

import { styles } from "./styles/HomeStyle";
import HomeCard from "./HomeCard";

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

const Home = () => {
    return (
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
        </ScrollView>
    );
}

export default Home;