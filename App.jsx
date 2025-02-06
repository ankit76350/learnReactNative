import { View, Text, FlatList, Image, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import dummyData from "./dummyData.json";

const App = () => {
  const [data] = useState(dummyData);

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View>
        <Text style={{ margin: 10 }}>I am using FlatList with horizontal</Text>
        <FlatList
          style={{ padding: 10 }}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Image style={styles.largeImage} source={{ uri: item.image }} />
              <Text style={styles.nameText}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <Text style={{ margin: 10 }}>I am using map</Text>
      <View>
        {data.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        ))}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Set number of columns
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  largeImage: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  nameText: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  imageContainer: {
    padding: 15,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
});
