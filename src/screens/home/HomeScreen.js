import { Text, View, Alert, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Styles from './HomeScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { fatchUserData } from '../../store/BirthdaySlice';
import SplashScreen from '../splashScreen/SplashScreen';
import moment from 'moment';




class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false ,
                    currentDate : null,
                    currentBDate : null,

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
  }
   FetchData = () => {
    let cDate = moment().format('MMMM Do YYYY, h:mm:ss a')
    this.setState({ currentDate: cDate })
  
  }

  bDayRemaining = () =>{
     let date = new Date()
     let year = date.getFullYear()
     let bDate =  new Date(this.props.birthdayUserData.dob)
     let getDate = bDate.getDate();
     let getMonth = bDate.getMonth();
    let newBdate = `${getMonth +1}-${getDate}-${year}`
    let BdateCurrent = new Date(newBdate)
    // this.setState({currentBDate : BdateCurrent})
      this.setState({currentBDate : BdateCurrent})   


  }
 
    
  
  render() {
    console.log(this.state.currentBDate)
    const loadoing = this.state.loading;
    // setInterval(this.FetchData, 1000);
    setInterval(this.bDayRemaining, 5000);
    return (
      <>
        {loadoing ? <SplashScreen /> :
          <View style={Styles.container}>
            <ScrollView >
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
                <Text style={Styles.inContainer3text1}>Current Date and Time</Text>
                <Text style={Styles.inContainer3text2}>{this.state.currentDate}</Text>
              </View>
              <View style={Styles.inContainer4}>
                <Text style={Styles.inContainer4text1}>R.Day</Text>
                <Text style={Styles.inContainer4text2}>hallo</Text>
              </View>
            </ScrollView>
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
