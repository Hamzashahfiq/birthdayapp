import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditBirthdayScreen from '../screens/editBirthday/EditBirthdayScreen';
import HomeScreen from '../screens/home/HomeScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import AddScreen from '../screens/addScreen/AddScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>


        <Tab.Navigator screenOptions={({ route }) => (
          {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                return <Icon name='home' size={size} color={color} />
              } else if (route.name === 'Notification') {
                return <Icon name='bell' size={size} color={color} />
              }
              else if (route.name === 'Add') {
                return <Icon name='plus' size={size} color={color} />
              }

              // You can return any component that you like here!
              // return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
          
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notification" component={NotificationScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}