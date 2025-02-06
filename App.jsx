import { StyleSheet, ScrollView, View, Text,TextInput, Image,FlatList ,Button} from 'react-native';
import React, { useState } from 'react';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Search from './src/screen/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      }
    }}
    >
      {/* in this sequence screen will show you */}
    {/* <Stack.Navigator initialRouteName="Home"> */}

      <Stack.Screen 
      name="Home"
      component={Home} 
      options={{headerShown:false}}


     
      />
      <Stack.Screen 
      name="Profile"
      component={Profile} 
      options={{title:"Profile Screen Page"}}
      />
      <Stack.Screen 
      name="Search"
      component={Search} 
      options={{headerStyle:{backgroundColor:"red"}}}
      />
    </Stack.Navigator>
  )
}

const App = () => {

  return (

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
 

});