import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [data] = useState([
    { id: 1, lang: "PHP" },
    { id: 2, lang: "JAVA" },
    { id: 3, lang: "JavaScript" },
    { id: 4, lang: "Swift" },
  ])

  const [currActive, setCurrActive] = useState(1)

  return (
    <View>

      <View style={{ width: '100%', height: "100%", margin: 10 }}>

        {
          data.map((item, index) => (
            <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems: 'center', }}
              onPress={() => setCurrActive(item.id)}
            >
              {
                currActive === item.id ? <View style={{ width: 20, height: 20, backgroundColor: 'green', borderColor: 'red', borderRadius: 10, margin: 5 }}></View> : <View style={{ width: 20, height: 20, backgroundColor: 'green', borderColor: 'red', margin: 5 }}></View>
              }
              <Text>{item.lang}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default App