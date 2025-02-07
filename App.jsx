import React , {Component} from "react";
import Student from './components/Student';
import { View ,Text,Button} from "react-native";

class App extends Component{
  fruit = ()=>{
    console.log("Apple");
  }
  render(){
    return(
      <View>
        <Text>App Class Components</Text>
        <Button title={"Press"} onPress={()=>this.fruit()}></Button>
        <Student/>
      </View>
    )
  }
}

export default App