import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

const Profile = ({ navigation, route }) => {
  // Ensure route.params exists before destructuring
  const { name, id } = route.params || { name: "Guest", id: "N/A" }; // ✅ Fix

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Text>Id: {id}, Name: {name}</Text>
      <Button 
        title="Search" 
        onPress={() => navigation.navigate("Search")} 
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
