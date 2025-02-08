import { View, Text, Alert, ActivityIndicator, Button, ScrollView, Modal, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [loadData, setLoadData] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = "http://10.0.2.2:3000/users";
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
  }, [loadData]);

  const deleteData = async (id) => {
    try {
      const url = "http://10.0.2.2:3000/users";
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        Alert.alert("Data deleted successfully.");
        setLoadData(!loadData);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to delete data.");
    }
  };

  const updateData = (item) => {
    console.log("updateData function triggered", item);
    setSelectedData(item);
    setFormData({ name: item.name, age: String(item.age) }); 
    setOpenModal(true);
  };

  const updateDataToServer = async () => {
    if (!selectedData) return;

    try {
      const url = `http://10.0.2.2:3000/users/${selectedData.id}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          age: parseInt(formData.age, 10), 
        }),
      });

      if (response.ok) {
        Alert.alert("Success", "Data updated successfully!");
        setOpenModal(false);
        setLoadData(!loadData);
      } else {
        Alert.alert("Error", "Failed to update data.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>GET API Call</Text>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={{ fontSize: 20, flex: 1 }}>Name</Text>
          <Text style={{ fontSize: 20, flex: 1 }}>Age</Text>
          <Text style={{ fontSize: 20, flex: 1.5 }}>Operation</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : data ? (
          data.map((item) => (
            <View
              key={item.id}
              style={{ flexDirection: "row", backgroundColor: "gray", padding: 5, margin: 5 }}
            >
              <Text style={{ fontSize: 20, flex: 1 }}>{item.name}</Text>
              <Text style={{ fontSize: 20, flex: 1 }}>{item.age}</Text>
              <View style={{ flex: 1.5, flexDirection: "row", gap: 5 }}>
                <Button title="Delete" onPress={() => deleteData(item.id)} />
                <Button title="Update" onPress={() => updateData(item)} />
              </View>
            </View>
          ))
        ) : (
          <Text style={{ fontSize: 20, color: "red" }}>No data available.</Text>
        )}
      </ScrollView>

      {/* Modal for Editing */}
      <Modal visible={openModal} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 50,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Edit User</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginTop: 10,
                width: 200,
              }}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Enter Name"
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginTop: 10,
                width: 200,
              }}
              value={formData.age}
              onChangeText={(text) => setFormData({ ...formData, age: text })}
              keyboardType="numeric"
              placeholder="Enter Age"
            />
            <Button title="Update" onPress={updateDataToServer} />
            <Button title="Close" onPress={() => setOpenModal(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
