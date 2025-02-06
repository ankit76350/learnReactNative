import { View, Text,StyleSheet ,Button} from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
    //from where the navigation is coming in the argumnet? 
    const {name,id} = route.params;
  return (
    <View style={styles.container}>
      <Text> Profile Page </Text>
      <Text> Id: {id}, Name: {name}</Text>
      <Button title="Search"
      onPress={()=>navigation.navigate("Search")}
      ></Button>
    </View>
  )
}

export default Profile


const styles = StyleSheet.create({
 
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
}
});