import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Student = () => {
   const time =  setInterval(()=>{
        console.warn("internal called................")
    },2000)
    useEffect(()=>{
        return ()=>{
            console.log('====================================');
            console.log("Hello");
            console.log('====================================');
            clearInterval(time)
        }
    },[])

  return (
    <View>
      <Text>Student </Text>
    </View>
  )
}

export default Student