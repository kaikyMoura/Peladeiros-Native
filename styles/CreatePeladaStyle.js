import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      color: '#014b4b',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    scrollStyle: {
      width: '100%',
      backgroundColor: '#ffffff',
    },
    inputStyle: {
      width: '100%',
      height: 40,
      padding: 4,
      borderRadius: 4,
      color: '#000000',
      fontSize: 16,
      marginBottom: 16,
      backgroundColor: '#dddddd',
    },
    presCreateStyle: {
      width: '100%',
      padding: 10,
      marginTop: 16,
      borderRadius: 4,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#014B4A',
    },
    presUpdateStyle: {
      width: '100%',
      padding: 10,
      marginTop: 16,
      borderRadius: 4,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#0d47a1',
    },
    presDeleteStyle: {
      width: '100%',
      padding: 10,
      marginTop: 16,
      borderRadius: 4,
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: '#b71c1c',
    },
    textPressableStyle: {
      display: 'flex',
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    textLinkStyle: {
      padding: 12,
      fontSize: 12,
      borderRadius: 4,
      color: '#000000',
      textAlign: 'center',
      backgroundColor: '#dddddd'
    },
    textErrorStyle: {
      padding: 16,
      fontSize: 16,
      color: '#ff0000',
      textAlign: 'center'
    }
});