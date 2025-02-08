import { View, Text, Button, Alert, ActivityIndicator } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false); // State for loader

  const saveAPIData = async () => {
    setLoading(true); // Show loader

    const data = {
      name: "kanak",
      age: 24,
      email: "kanak@gmail.com",
    };

    const url = "http://10.0.2.2:3000/users"; // Fixed URL

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();
      console.log(result);
      Alert.alert("Response", JSON.stringify(result));
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false); // Hide loader after API call completes
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Post API Call</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Button title="Save Data" onPress={saveAPIData} />
      )}
    </View>
  );
};

export default App;
