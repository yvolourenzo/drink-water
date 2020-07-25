import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import Start from "./pages/Start";

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Start"
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                }}
                
            >
                <Tab.Screen name="Start" component={Start} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="play" size={30} color={focused ? '#ddd' : '#ddd'} />
                        ),
                    }}
                />
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="home" size={30} color={focused ? '#ddd' : '#ddd'} />
                        )
                    }}  
                />
                <Tab.Screen name="Book" component={Home} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="book" size={30} color={focused ? '#ddd' : '#ddd'} />
                        )
                    }}  
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes