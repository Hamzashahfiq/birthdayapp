import { StyleSheet } from 'react-native';


 const Styles = StyleSheet.create({
    container:{
        backgroundColor:'#a9def9',
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
    inputView:{
        marginVertical:30
    },
    button:{
      backgroundColor:'purple',
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