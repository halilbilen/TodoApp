import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Detail from './Detail';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default App;