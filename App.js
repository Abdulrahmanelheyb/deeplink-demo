import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import * as Linking from 'expo-linking';
import {NavigationContainer} from "@react-navigation/native";

const prefix = Linking.createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix, 'deeplinkdemo://'],
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto"/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
