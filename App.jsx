import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tabn = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabn.Navigator screenOptions={{ headerStyle: { backgroundColor: "blue" } }}>
      <Tabn.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Foundation name="home" size={30} color="red" /> 
          ),
        }}
      />
      <Tabn.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={30} color="black" />
          ),
        }}
      />
      <Tabn.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <AntDesign name="user" size={30} color="green" />
          ),
        }}
      />
    </Tabn.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
