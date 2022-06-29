import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Navigation from './src/navigation/Navigation'
import { Store } from './src/config/Store'
import { Provider } from 'react-redux'



 class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}



export default App