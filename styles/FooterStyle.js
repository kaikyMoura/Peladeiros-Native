import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 56,
        bottom: 0,
        zIndex: 1000,
        elevation: 16,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#008786',
    },
    presStyle: {
        marginLeft: 38,
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
        color: '#ffffff',
        fontWeight: 'bold',
    }
});
