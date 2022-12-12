import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 54,
        bottom: 0,
        zIndex: 1000,
        elevation: 16,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    presStyle: {
        marginLeft: 24,
        marginRight: 24,
        textAlign: 'center',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 24,
        height: 24,
        zIndex: 1000,
    },
    textStyle: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'bold',
    }
});
