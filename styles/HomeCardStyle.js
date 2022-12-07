import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    cardStyle: {
      elevation: 4,
      color: '#014b4b',
      backgroundColor: '#ffffff',
    },
    lineRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textSubjectStyle: {
      fontSize: 14,
      color: '#014b4b',
      fontWeight: 'bold',
    },
    imageStyle: {
        width: '100%',
        height: 260,
    },
    inputStyle: {
      width: '100%',
      height: 40,
      padding: 4,
      borderRadius: 4,
      marginBottom: 16,
      color: '#ffffff',
      fontSize: 16,
      backgroundColor: '#014b4b50',
    },
    pressableStyle: {
      width: '40%',
      padding: 10,
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: '#014b4b',
      left: 220
    },
    textPressableStyle: {
      display: 'flex',
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    thumbsup: {
      width: '40%',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 4,
    }
});