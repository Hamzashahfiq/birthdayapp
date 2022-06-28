import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome';

 const myIcon = <Icon name="rocket" size={30} color="#900" />;


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.inContainer1} >
           <View style={Styles.circleView} >

           </View>
        </View>
        <View style={Styles.inContainer2}>
           <Text style={Styles.inContainer2text}>hallo</Text>
           <Text style={Styles.inContainer2text}>BirthDay!</Text>
           <Text style={Styles.inContainer2text}>hallo</Text>
        </View>
        <View style={Styles.inContainer3} >
           <Text>hallo</Text>
        </View>
        <View style={Styles.inContainer4}>
           <Text style={Styles.inContainer4text1}>R.Day</Text>
           <Text style={Styles.inContainer4text2}>hallo</Text>
        </View>
        
         
        
      </View>
    )
  }
}