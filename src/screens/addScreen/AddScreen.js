import { Text, View, TextInput, ScrollView, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Styles from './AddScreenStyle'
import InputText from '../../componet/inputText/InputText'
import DatePicker from 'react-native-date-picker'


export default class AddScreen extends Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() } 
    }
    setDate = (e) => {
      this.setState({date : e})

  }
 
  render() {
    console.log(this.state.date)
    return (
      <ScrollView style={Styles.container}>
        <View>
          <Text style={Styles.containerText}>Add Your Name & BirthDate!</Text>
        </View>
        {/* <Text>{this.state.date}</Text> */}
        <ScrollView style={Styles.inputView}>
          <InputText placeHolder='Enter your name' />
             <Text style={Styles.dateText}>Set Your DOB</Text>
          <DatePicker  mode="date"  date={this.state.date} onDateChange={this.setDate} />

          <View style={Styles.buttonView}>
            <TouchableOpacity
              style={Styles.button}
              onPress={null}
            >
              <Text style={Styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </ScrollView>

    )
  }
}