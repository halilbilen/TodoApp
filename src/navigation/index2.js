import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Detail from './Detail';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'ios-home'
                        } else if (route.name === 'Chat') {
                            iconName ='ios-chatbubbles'
                        }
                        else if (route.name === 'Detail1') {
                            iconName =  'md-list-box'
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Chat" component={Detail} />
                <Tab.Screen name="Detail1" component={Detail} />
                <Tab.Screen name="Detail2" component={Detail} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}