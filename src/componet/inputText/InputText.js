import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import Styles from './InputTextStyle'

export default class InputText extends Component {
    constructor(props){
        super(props)
    }
 
    render() {
        return (
            <View style = {Styles.inputView}>
                <TextInput  placeholder = {this.props.placeHolder} value = {this.props.value} style={Styles.input} onChangeText={this.props.onChangeText}/>
            </View>
        )
    }
}