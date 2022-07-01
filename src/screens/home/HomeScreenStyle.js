import { StyleSheet } from 'react-native';


 const Styles = StyleSheet.create({
    container:{
        backgroundColor:'#a9def9',
        flex:1,
        paddingVertical:20
    },
    inContainer1:{
        flex:1,
        marginHorizontal:20,
        padding: 10,
        borderBottomWidth:1,
        borderColor:'#99ffffff',
        maxWidth:60,
        justifyContent:'center',
      
    },
    inContainer2:{
        flex:2,
        marginHorizontal:20,
        padding: 10,
        marginVertical:10,
        borderBottomWidth:1,
        borderColor:'#99ffffff',
        height:130
        
    },
    inContainer3:{
        flex:2,
        marginHorizontal:20,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        borderBottomWidth:1,
        borderColor:'#99ffffff',
        height:150
    },
    inContainer3text1:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'"Times New Roman", Times, serif'
    },
    inContainer3text2:{
        color:'white',
        marginTop:40,
        fontSize:15,
        fontWeight:'bold',
        fontFamily:'"Times New Roman", Times, serif'
    },
    inContainer4:{
        flex:2,
        marginHorizontal:20,
        padding: 10,
    },
    circleView:{
       width:50,
       height:50,
       backgroundColor:'red',
       borderRadius:50
    },
    inContainer2text:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'"Times New Roman", Times, serif'
    },
    inContainer2text3:{
        color:'white',
        fontSize:15,
        fontFamily:'"Times New Roman", Times, serif'

    },
    inContainer4text1:{
        color:'white',
          fontWeight:'bold',
        fontFamily:'"Times New Roman", Times, serif',
        textAlign:'center',
        fontSize:20,
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