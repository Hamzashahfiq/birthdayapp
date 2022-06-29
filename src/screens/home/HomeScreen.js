import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';


 class HomeScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    // console.log(this.props)
    return (
      <View style={Styles.container}>
        <View style={Styles.inContainer1} >
           <View style={Styles.circleView} >

           </View>
        </View>
        <View style={Styles.inContainer2}>
           <Text style={Styles.inContainer2text}>{this.props.birthdayUserData.name}</Text>
           <Text style={Styles.inContainer2text}>BirthDay!</Text>
           <Text style={Styles.inContainer2text3}>{this.props.birthdayUserData.dob}</Text>
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

const mapStateToProps = (state) => ({ birthdayUserData: state.BirthdaySlice.birthdayUserData })

export default connect(mapStateToProps)(HomeScreen);