/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darktext}>
        Hello world
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darktext: {
    color: '#000000',
  },
});
export default AppPro;
