import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./pages/Home";
import Start from "./pages/Start";

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Start"
                barStyle={{ backgroundColor: '#FFFFFF' }}
                labeled={false}
                
            >
                <Tab.Screen name="Start" component={Start} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="wine-bottle" size={22} color={focused ? '#2968A1' : '#14171A'} />
                        )
                    }}
                />
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name="calendar-alt" size={22} color={focused ? '#2968A1' : '#14171A'} />
                        )
                    }}  
                />
                <Tab.Screen name="Config" component={Home} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name='cog' size={22} color={focused ? '#2968A1' : '#14171A'} />
                        )
                    }}  
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes