import { Text, View, Alert, ScrollView, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import { connect } from 'react-redux';
import { fatchUserData } from '../../store/BirthdaySlice';
import SplashScreen from '../splashScreen/SplashScreen';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import TrackPlayer from 'react-native-track-player';


class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      currentDate: null,
      currentBDate: -1000000,

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
    this.trackPlayerSetup()
  }
  // FetchData = () => {
  //   let cDate = moment().format('MMMM Do YYYY, h:mm')
  //   this.setState({ currentDate: cDate })

  // }

  trackPlayerSetup = async () => {
    const track = {
      url: require('../../imageAssets/BMusic/HappyBirthday.mp3'), // Load media from the app bundle
      title: 'Happy Birthday tone',
      duration: 15
    };
    console.log('track')
    await TrackPlayer.setupPlayer()
    await TrackPlayer.add([track]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.birthdayUserData.dob !== this.props.birthdayUserData.dob) {
      this.bDayRemaining()
    }
  }
  bDayRemaining = () => {
    let date = new Date()
    let cHours = date.getHours()
    let cMts = date.getMinutes() + 1
    let year = date.getFullYear()
    let bDate = new Date(this.props.birthdayUserData.dob)
    let getDate = bDate.getDate();
    let getMonth = bDate.getMonth();
    let BdateCurrent = new Date(year, getMonth, getDate, cHours, cMts, 0)
    let btime = BdateCurrent.getTime()
    let currentTime = date.getTime()
    let rtime = btime - currentTime
    let times = rtime / 1000
    this.setState({ currentBDate: times })
  }

  // UNSAFE_componentWillMount() {
  //   console.log('will mount')
   
  // }

  onFinish = () => {
    let bText = this.props.birthdayUserData.name;
    this.props.navigation.navigate('Notification', { text: bText, mPlay:true})
  }


  componentWillUnmount = () => {
    this.setState({ currentBDate: -1000000 })
  }



  render() {
 
    const loadoing = this.state.loading;
    // setInterval(this.FetchData, 20000);
    let bgImageArr = [{ text: 'Happy Sunday', src: require('../../imageAssets/bg0.jpg') }, { text: 'Happy Monday', src: require('../../imageAssets/bg1.jpg') }, { text: 'Happy Tuesday', src: require('../../imageAssets/bg2.jpg') }
      , { text: 'Happy Wednesday', src: require('../../imageAssets/bg3.jpg') }, { text: 'Happy Thursday', src: require('../../imageAssets/bg4.jpg') }, { text: 'Happy Friday', src: require('../../imageAssets/bg5.jpg') },
    { text: 'Happy Saturday', src: require('../../imageAssets/bg6.jpg') }]
    let day = new Date().getDay()

    console.log(this.state.currentBDate)
    return (

      <>
        {loadoing ? <SplashScreen /> :
          <View style={Styles.container}>
            <ImageBackground style={Styles.imageBackground} source={bgImageArr[day].src} resizeMode="cover" >
              <ScrollView >
                <View style={Styles.inContainer1} >
                  <View style={Styles.circleView} >
                  </View>
                  <View>
                    <Text style={Styles.inContainer1Text} >{bgImageArr[day].text}</Text>
                  </View>
                </View>
                <View style={Styles.inContainer2}>
                  <Text style={Styles.inContainer2text}>{this.props.birthdayUserData.name}`s</Text>
                  <Text style={Styles.inContainer2text}>Birthday!</Text>
                  <Text style={Styles.inContainer2text3}>{this.props.birthdayUserData.dob}</Text>
                </View>
                {/* <View style={Styles.inContainer3} >
                   //<Text style={Styles.inContainer3text1}>Current Date and Time</Text>
                //<Text style={Styles.inContainer3text2}>{this.state.currentDate}</Text> 

                </View> */}
                <View style={Styles.inContainer4}>
                  <Text style={Styles.inContainer4text1}>D.Day</Text>
                  <View style={Styles.inContainer4text2}>
                    {this.state.currentBDate < -86400 ? <Text style={Styles.countDownText}>CountDown Completed</Text> :

                      <CountDown
                        until={this.state.currentBDate}
                        // until={20}
                        onFinish={this.onFinish}
                        // onPress={() => alert('hello')}
                        size={20}
                        timeLabelStyle={{ color: 'white' }}

                      />

                    }
                    {/* this.state.currentBDate === 786 ? null : */}
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
