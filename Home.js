import React from "react";
import {StatusBar} from "expo-status-bar";
import {View, FlatList} from "react-native";

import HomeCard from "./HomeCard";

import {styles} from "./styles/HomeStyle";

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
    return(
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item}) =>
                    <HomeCard
                        name={item.name}
                        date={item.date}
                        subject={item.subject}
                        image={item.image}
                        comment={item.comment}
                    />
                }
            />
            <StatusBar style="auto"/>
        </View>
    );
}

export default Home;