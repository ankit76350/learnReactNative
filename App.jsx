import { View, Text, Alert, ActivityIndicator, Button, ScrollView, Modal, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loadData, setLoadData] = useState(false);
  const [search, searchData] = useState('')


  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `http://10.0.2.2:3000/users?q=${search}`;
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loadData,search]);




return (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>GET API Call</Text>
      <TextInput style={{ borderRadius:10, borderWidth:2, borderColor:"red"}} onChangeText={(text)=>searchData(text)}/>


      <View style={{ flexDirection: "row", flex: 1 ,backgroundColor: "skyblue", padding:10 , margin:1, marginTop:10}}>
        <Text style={{ fontSize: 20, flex: 1.5 }}>Name</Text>
        <Text style={{ fontSize: 20, flex: 1 }}>Age</Text>
        <Text style={{ fontSize: 20, flex: 3 }}>Email</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : data ? (
        data.map((item) => (
          <View
            key={item.id}
            style={{ flexDirection: "row", backgroundColor: "gray", padding: 5, margin: 5 }}
          >
            <Text style={{ fontSize: 20, flex: 1.5 }}>{item.name}</Text>
            <Text style={{ fontSize: 20, flex: 1 }}>{item.age}</Text>
            <Text style={{ fontSize: 20, flex: 3 }}>{item.email}</Text>

          </View>
        ))
      ) : (
        <Text style={{ fontSize: 20, color: "red" }}>No data available.</Text>
      )}
    </ScrollView>

  </View>
);
};

export default App;
