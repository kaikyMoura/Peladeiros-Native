import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    cardStyle: {
      elevation: 4,
      marginBottom: 8,
      backgroundColor: '#ffffff',
    },
    avatarStyle: {
      width: 42,
      height: 42,
      borderRadius: 360,
      backgroundColor: '#dddddd',
    },
    lineRowStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textSmallStyle: {
      fontSize: 12,
      color: '#000000',
    },
    textTitleStyle: {
      fontSize: 14,
      color: '#000000',
      fontWeight: 'bold',
    },
    textSubjectStyle: {
      fontSize: 14,
      color: '#000000',
    },
    imageStyle: {
        marginTop: 4,
        marginBottom: 4,
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
});