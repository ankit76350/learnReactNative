import { View, Text, Button} from 'react-native'
import React , {useState} from 'react'
import Student from './components/Student'

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text>UseEffect for unmount component: {show ? "Visible" : "Hidden"}</Text>
      <Button onPress={()=>setShow(!show)} title='Show/Hide'/>
       { show && <Student/>}
    </View>
  )
}

export default App