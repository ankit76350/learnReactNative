import { StyleSheet, ScrollView, View, Text,TextInput, Image,FlatList ,Button} from 'react-native';
import React, { useState } from 'react';




const App = () => {
  const [textp , setTextP] = useState('')
  const [data, setData] = useState('')

  const handleSubmit = () => {
    setData(textp)
    setTextP()

  } 
  return (

    <View style={styles.container}>
      <Text>I am Text Input </Text>
      <TextInput
      placeholder='Enter a text here..'
      value={textp}
      onChangeText={(ted)=>setTextP(ted)}
      multiline
      numberOfLines={1}
      />

      <Text multiline numberOfLines={1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad saepe, accusantium, eveniet placeat nostrum quas quibusdam beatae quam sint quae ex officiis asperiores libero porro nesciunt nemo fugit sapiente facere?</Text>

    <Button title='submit' onPress={handleSubmit}></Button>

    {data && <Text>Result: {data}</Text>}

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