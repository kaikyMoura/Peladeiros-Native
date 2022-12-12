import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imageStyle: {
        width: 192,
        height: 192,
        borderRadius: 360,
        marginBottom: 16,
        backgroundColor: '#dddddd',
    },
    textSmall: {
        padding: 16,
        fontSize: 12,
        color: '#000000',
        borderRadius: 360,
        backgroundColor: '#dddddd',
    },
    textLarge: {
        fontSize: 20,
        marginBottom: 32,
        color: '#000000',
        fontWeight: 'bold',
    }
});
