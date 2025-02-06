import { View, Text,StyleSheet ,Button} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    //from where the navigation is coming in the argumnet? 
  return (
    <View style={styles.container}>
      <Text> Home Page </Text>
      <Button title="Profile"
      onPress={()=>navigation.navigate("Profile",{id:1, name:"ankit"})}
      ></Button>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
 
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
}
});