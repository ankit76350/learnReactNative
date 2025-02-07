import React , {Component} from "react";
import Student from './components/Student';
import { View ,Text,Button,TextInput} from "react-native";

class App extends Component{
  constructor(){
    super();
    this.state={name:"Anil",}
  }
  fruit = ()=>{
    console.log("Apple");
  }
  updateName(val){
    this.setState({name:val})
  }
  render(){
    return(
      <View>
        <Text>App Class Components {this.state.name}</Text>
        <TextInput
        placeholder="enter your name"
        onChangeText={(text)=>this.updateName(text)}
        />
        <Button title={"Press"} onPress={()=>this.fruit()}></Button>
        <Student name={this.state.name}/>
      </View>
    )
  }
}

export default App