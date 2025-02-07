import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from "react-native-webview";

const App = () => {
  return (
     <WebView source={{uri:"https://reactnative.dev/"}}/>
  )
}

export default App