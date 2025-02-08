import { View, Text, Alert, ActivityIndicator, Button, ScrollView, Modal, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("user", "ANkir");
    } catch (error) {
      console.error("Error storing data", error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      // if (value !== null) {
        console.log("value......", value);

        // return value;
      // }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data", error);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <Button onPress={storeData} title="Set Data"/>
      <Button onPress={getData} title="Get Data"/>
      <Button onPress={()=>removeData("user")} title="Remove Data"/>
    </View>
  );
};

export default App;
