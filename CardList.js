import React from "react";
import {SafeAreaView, Text, FlatList} from "react-native";

import HomeCard from "./HomeCard";

import {styles} from "./styles/CardListStyle";

const CardList = ({data, navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            {data.length > 0 ? (
                <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <HomeCard
                            uid={item._id}
                            conta={item.conta}
                            campo={item.campo}
                            bairro={item.bairro}
                            endereco={item.endereco}
                            privado={item.privado}
                            midia={item.midia}
                            titulo={item.titulo}
                            assunto={item.assunto}
                            datainicial={item.datainicial}
                            navigation={navigation}
                        />
                    }
                />
            ) : (
                <Text>Procurando suas peladas ...</Text>
            )}
        </SafeAreaView>
    );
}

export default CardList;
