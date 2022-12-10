import { View } from "react-native"
import { styles } from "./styles/headerbarstyle"

const logo = { uri: './assets/android-icon-white-36x36.png'}

export const ImageHeader = () => (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={styles.imgie}
        source={{logo}}
      />
    </View>
  );