import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditBirthdayScreen from '../screens/editBirthday/EditBirthdayScreen';
import HomeScreen from '../screens/home/HomeScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
   render() {
    return (
        <NavigationContainer>
         
         {/* screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
        
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }, 
        {headerShown:false}
        )} */}
          <Tab.Navigator  >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Edit" component={EditBirthdayScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}