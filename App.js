import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, StyleSheet } from 'react-native';
import Lab01_01 from './Lab01_01';
import Lab01_02 from './Lab01_02';
import Lab01_03 from './Lab01_03';
import Lab01_04 from './Lab01_04';
import Lab01_05 from './Lab01_05';
import Lab01_06 from './Lab01_06';
import Lab01_07 from './Lab01_07';
import Lab01_08 from './Lab01_08';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Lab01_01" component={Lab01_01} />
        <Stack.Screen name="Lab01_02" component={Lab01_02} />
        <Stack.Screen name="Lab01_03" component={Lab01_03} />
        <Stack.Screen name="Lab01_04" component={Lab01_04} />
        <Stack.Screen name="Lab01_05" component={Lab01_05} />
        <Stack.Screen name="Lab01_06" component={Lab01_06} />
        <Stack.Screen name="Lab01_07" component={Lab01_07} />
        <Stack.Screen name="Lab01_08" component={Lab01_08} />
        {/* Thêm các màn hình lab khác vào đây */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Lab 01 - 01" onPress={() => navigation.navigate('Lab01_01')} />
        <Button title="Lab 01 - 02" onPress={() => navigation.navigate('Lab01_02')} />
        <Button title="Lab 01 - 03" onPress={() => navigation.navigate('Lab01_03')} />
        <Button title="Lab 01 - 04" onPress={() => navigation.navigate('Lab01_04')} />
        <Button title="Lab 01 - 05" onPress={() => navigation.navigate('Lab01_05')} />
        <Button title="Lab 01 - 06" onPress={() => navigation.navigate('Lab01_06')} />
        <Button title="Lab 01 - 07" onPress={() => navigation.navigate('Lab01_07')} />
        <Button title="Lab 01 - 08" onPress={() => navigation.navigate('Lab01_08')} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between', // Canh đều các button theo chiều dọc
    alignItems: 'center',
    height: '50%', // Set chiều cao của button container là 50% của màn hình
  },
});