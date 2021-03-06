import { Text, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import Styles from './NotificationScreenStyle'
import ConfettiCannon from 'react-native-confetti-cannon';
import TrackPlayer from 'react-native-track-player';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props)

  }

  // componentDidMount(){
   
  //   console.log(this.props)
  // }
  componentWillUnmount() {
    TrackPlayer.pause();
  }

  render() {
  setTimeout( () =>{if (this.props.route.params !== undefined) {
      TrackPlayer.play();
    }},1000)

    return (
      <View style={Styles.container}>
        {this.props.route.params !== undefined ? <ImageBackground style={Styles.imageBackground} source={require('../../imageAssets/nbg.jpg')} resizeMode="cover" >
          <Text style={Styles.containerText}>
            Happy Birthday <Text style={Styles.containerText2}>{this.props.route.params.text}</Text>
          </Text>

          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} autoStartDelay={0} />

        </ImageBackground> :
          <View style={Styles.container1} >
            <Text style={{ color: 'red', fontSize: 25 }}>No Notification</Text>
          </View>
        }

      </View>
    )
  }
}