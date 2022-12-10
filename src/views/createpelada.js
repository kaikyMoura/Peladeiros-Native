import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/createPeladaStyle";



export const CreatePelada = () => {
/*
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);
*/
    return (
        <View style={styles.divcreatepeladacontent}>
            <View style={styles.divcreatepeladaform}>
                <Text style={styles.divtitle} >Criar pelada</Text>
                {/*<SafeAreaView>
                    <FormData>
                        {fileResponse.map((file, index) => (
                            <Text
                                key={index.toString()}
                                style={styles.uri}
                                numberOfLines={1}
                                ellipsizeMode={'middle'}>
                                {file?.uri}
                            </Text>
                        ))}

                        <Button style={styles.formcontrol} title="Select 📑" onPress={handleDocumentSelection} />*/}
                        <TextInput style={styles.formcontrol} placeholder="Título" />
                        <TextInput style={styles.formcontrol} placeholder="Total de jogadores" />
                        <TextInput style={styles.formcontrol} placeholder="Localização" />
                        <TextInput style={styles.formcontrol} numberOfLines={4} placeholder="Sua mensagem..." />
                    
                    <Button style={styles.btnsubmitcustom} title="Salvar" />
                
            </View>
        </View>
    )
}