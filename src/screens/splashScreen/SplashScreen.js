import { Text, View, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import Styles from './SplashScreenStyle'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color='blue' />
      </View>
    )
  }
}