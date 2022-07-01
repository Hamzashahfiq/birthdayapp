import { Text, View, Alert, ScrollView, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { fatchUserData } from '../../store/BirthdaySlice';
import SplashScreen from '../splashScreen/SplashScreen';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';






class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      currentDate: null,
      currentBDate: 786,

    }
  }
  setLoading = () => {
    this.setState({ loading: true })
  }
  unSetLoading = () => {
    this.setState({ loading: false })
  }


  componentDidMount() {
    const sLoading = this.setLoading
    const usLoading = this.unSetLoading
    this.props.fatchData({ sLoading, usLoading })
    console.log('did mount')

  }
  // FetchData = () => {
  //   let cDate = moment().format('MMMM Do YYYY, h:mm')
  //   this.setState({ currentDate: cDate })

  // }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.birthdayUserData.dob !== this.props.birthdayUserData.dob) {
      this.bDayRemaining()
    }
  }
  bDayRemaining = () => {
    let date = new Date()
    let year = date.getFullYear()
    let bDate = new Date(this.props.birthdayUserData.dob)
    let getDate = bDate.getDate();
    let getMonth = bDate.getMonth();
    let BdateCurrent = new Date(year, getMonth, getDate, 0, 0, 0)
    let btime = BdateCurrent.getTime()
    let currentTime = date.getTime()
    let rtime = btime - currentTime
    let times = rtime / 1000
    this.setState({ currentBDate: times })
  }

  UNSAFE_componentWillMount() {
    console.log('will mount')
    // this.FetchData() 
  }



  render() {
    const loadoing = this.state.loading;
    // setInterval(this.FetchData, 20000);
    console.log(this.state.currentBDate)




    return (
      <>
        {loadoing ? <SplashScreen /> :
          <View style={Styles.container}>
            <ImageBackground style={Styles.imageBackground} source={require('../../images/bg6.jpg')} resizeMode="cover" >
              <ScrollView >
                <View style={Styles.inContainer1} >
                  <View style={Styles.circleView} >

                  </View>
                </View>
                <View style={Styles.inContainer2}>
                  <Text style={Styles.inContainer2text}>{this.props.birthdayUserData.name}`s</Text>
                  <Text style={Styles.inContainer2text}>Birthday!</Text>
                  <Text style={Styles.inContainer2text3}>{this.props.birthdayUserData.dob}</Text>
                </View>
                <View style={Styles.inContainer3} >
                  {/* <Text style={Styles.inContainer3text1}>Current Date and Time</Text>
                <Text style={Styles.inContainer3text2}>{this.state.currentDate}</Text> */}

                </View>
                <View style={Styles.inContainer4}>
                  <Text style={Styles.inContainer4text1}>R.Day</Text>
                  <View style={Styles.inContainer4text2}>
                    {this.state.currentBDate === 786 ? null :
                      <CountDown
                        until={this.state.currentBDate}
                        onFinish={() => alert('finished')}
                        // onPress={() => alert('hello')}
                        size={20}
                      />}
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
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
    fatchData: ({ sLoading, usLoading }) => dispatch(fatchUserData({ sLoading, usLoading }))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
