import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Config from "./pages/Configure";
import FirstStep from "./pages/Welcome";
import SecondStep from "./components/SecondStep";
import FinalStep from "./components/FinalStep";

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="FirstStep"
                barStyle={{ backgroundColor: '#FFFFFF' }}
                labeled={false}
                
            >
                <Tab.Screen name="Calendar" component={Calendar} 
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
                <Tab.Screen name="Config" component={Config} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name='cog' size={22} color={focused ? '#2968A1' : '#14171A'} />
                        )
                    }}  
                />
                <Tab.Screen name="FirstStep" component={FirstStep}
                   options={{
                      tabBarIcon: ({ focused }) => (
                          <Icon name='cog' size={22} color={focused ? '#2968A1' : '#14171A'} />
                    )
                   }}
                />
               <Tab.Screen name="SecondStep" component={SecondStep} />
                
               <Tab.Screen name="FinalStep" component={FinalStep} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes