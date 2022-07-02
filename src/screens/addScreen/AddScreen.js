import { Text, View, ScrollView, TouchableOpacity, Alert, ActivityIndicator, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import Styles from './AddScreenStyle'
import InputText from '../../componet/inputText/InputText'
import DatePicker from 'react-native-date-picker'
import { addUserData } from '../../store/BirthdaySlice'
import { connect } from 'react-redux'



class AddScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      name: '',
      id: 'u1',
      addLoading: false
    }
  }
  setDate = (e) => {

    this.setState({ date: e })
  }
  setName = (e) => {
    this.setState({ name: e })
  }
  setLoading = () => {
    this.setState({ addLoading: true })
  }
  unSetLoading = () => {
    this.setState({
      date: new Date(),
      name: '',
      id: 'u1',
      addLoading: false
    })

  }
  onPress = () => {
    if (!this.state.name) {
      Alert.alert("Enter all required data first.")
      return;
    }
    const sloading = this.setLoading
    const unloading = this.unSetLoading
    const navigation = this.props.navigation

    let dateObj = this.state.date
    let dateStr = dateObj.toDateString()
    let data = {
      name: this.state.name,
      id: this.state.id,
      dob: dateStr
    }

    this.props.addData({ data, sloading, unloading, navigation })

  }



  render() {
    return (
      <View style={Styles.container}>
        <ImageBackground style={Styles.imageBackground} source={require('../..//imageAssets/addbg.jpg')} resizeMode="cover" >
          <ScrollView style={Styles.smcontainer}>
            <View>
              <Text style={Styles.containerText}>Add Your Name & BirthDate!</Text>
            </View>
            <ScrollView style={Styles.inputView}>
              <InputText placeHolder='Enter your name*' value={this.state.name} onChangeText={this.setName} />
              <Text style={Styles.dateText}>Set Your DOB</Text>
              <DatePicker maximumDate={new Date()} mode="date" date={this.state.date} onDateChange={this.setDate} />

              <View style={Styles.buttonView}>
                {this.state.addLoading ?
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={null}
                  >
                    <Text style={Styles.buttonText}><ActivityIndicator color='white' /></Text>
                  </TouchableOpacity> :
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={this.onPress}
                  >
                    <Text style={Styles.buttonText}>Add</Text>
                  </TouchableOpacity>
                }
              </View>

            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View>

    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatching plain actions

    addData: ({ data, sloading, unloading, navigation }) => dispatch(addUserData({ data, sloading, unloading, navigation }))
  }
}



export default connect(null, mapDispatchToProps)(AddScreen);