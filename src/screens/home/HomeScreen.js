import { Text, View,Alert } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { fatchUserData } from '../../store/BirthdaySlice';
import SplashScreen from '../splashScreen/SplashScreen';



class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }
  }
  setLoading = () =>{
    this.setState({loading: true})
  }
  unSetLoading = () =>{
    this.setState({loading: false})
  }

  componentDidMount() {
      const sLoading = this.setLoading
      const usLoading = this.unSetLoading

    this.props.fatchData({sLoading, usLoading})
  }
  render() {
    const loadoing = this.state.loading;
    return (
      <>
        {loadoing ? <SplashScreen /> :
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
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({ birthdayUserData: state.BirthdaySlice.birthdayUserData })

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    fatchData: ({sLoading, usLoading}) => dispatch(fatchUserData({sLoading, usLoading}))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
