import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      color: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    inputStyle: {
      width: '100%',
      height: 40,
      padding: 4,
      borderRadius: 4,
      marginBottom: 16,
      color: '#000000',
      fontSize: 16,
      backgroundColor: '#dddddd',
    },
    pressableStyle: {
      width: '100%',
      padding: 10,
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: '#000000',
    },
    textPressableStyle: {
      display: 'flex',
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    textTitleStyle: {
      fontSize: 20,
      color: '#000000',
      marginBottom: 16,
    },
    textLinkStyle: {
      padding: 8,
      fontSize: 12,
      color: '#000000',
    }
});