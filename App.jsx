import { View, Text,Button, Alert } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview";

const App = () => {
  const saveAPIData = async ()=>{
    console.log("1");
    const data = {
        "name": "kanak",
        "age": 24,
        "email": "kanak@gmail.com"
    }
    const url = 'http://localhost:3000/users'
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" ,"Accept": "application/json"},
        body: JSON.stringify(data),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      let result = await response.json(); // Ensure response is properly parsed
      console.log(result);
      Alert.alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
    
  }
  return (
     <View>
      <Text style={{fontSize:30}}>Post API Call</Text>
      <Button title='Save Data' onPress={saveAPIData}></Button>
     </View>
  )
}

export default App