import { StyleSheet } from 'react-native';


 const Styles = StyleSheet.create({
    container:{
        flex:1,
    },
    smcontainer:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:40
    },
    containerText:{
        color:'white',
        fontSize:20,
        fontFamily:'"Times New Roman", Times, serif',
        textAlign:'center',
        fontWeight:'bold'
    },
    imageBackground:{
        flex:1
    },
    inputView:{
        marginVertical:30,
    },
    button:{
      backgroundColor:'#89b0ae',
      width:80,
      borderRadius:10
    },
    buttonText:{
        color: 'white',
        paddingVertical:10,
        textAlign:'center'
    },
    buttonView:{
        alignItems:'center',
        marginVertical:10,
        paddingBottom:10
    },
    datePickerStyle: {
        width: 200,
      },
      dateText:{
        textAlign:'center',
        color:'white',
        marginVertical:5,
        fontSize:15,
        fontWeight:'bold'
        
      }


})

export default Styles;