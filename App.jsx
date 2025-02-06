import { StyleSheet, ScrollView, View, Text, Image,FlatList } from 'react-native';
import React from 'react';
import dummyData from './dummyData.json';



const App = () => {
  return (

    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text >{item.name}</Text>
            <Text >{item.email}</Text>
          </View>
        )}

        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View style={{height:10}}/>}

        numColumns={3}
        columnWrapperStyle={{gap:10}}
        // extraData={}
        //horizontal

      />



    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dadada",
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent:"center",
    alignItems:"center"
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50
  },

});