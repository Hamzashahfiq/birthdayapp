import { StyleSheet } from 'react-native';


 const Styles = StyleSheet.create({
    container:{
        backgroundColor:'#a9def9',
        flex:1,
        paddingVertical:10
    },
    inContainer1:{
        flex:1,
        marginHorizontal:20,
        borderBottomWidth:1,
        borderColor:'#99ffffff',
        maxWidth:40,
        justifyContent:'center',
      
    },
    inContainer2:{
        flex:2,
        marginHorizontal:20,
        marginVertical:10,
        borderBottomWidth:1,
        borderColor:'#99ffffff',
        
    },
    inContainer3:{
        flex:1,
        marginHorizontal:20
    },
    inContainer4:{
        flex:2,
        marginHorizontal:20
    },
    circleView:{
       width:50,
       height:50,
       backgroundColor:'red',
       borderRadius:50
    },
    inContainer2text:{
        color:'white',
        fontSize:30,
        fontFamily:'"Times New Roman", Times, serif'
    },
    inContainer4text1:{
        color:'white',
          fontWeight:'bold',
        fontFamily:'"Times New Roman", Times, serif'
    },
    inContainer4text2:{
        color:'white',
        fontSize:30,
        fontFamily:'"Times New Roman", Times, serif',
        marginTop:5,
        marginLeft:10
    }


})

export default Styles;