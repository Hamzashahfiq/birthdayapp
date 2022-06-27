import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text >HomeScreen</Text>
      </View>
    )
  }
}