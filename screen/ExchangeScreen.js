import React from 'react';
import { Text, View,ScrollView,TouchableOpacity,StyleSheet,FlatList, TextInput, Alert,Modal} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class ExchangeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userName:firebase.auth().currentUser.email,
            itemName:'',
            itemDescription:''
        }
    }

    addItem = (itemName,itemDescription) =>{
        var userName = this.state.userName
        db.collection('exchange_requests').add({
            "userName":userName,
            "itemName":itemName,
            "description":itemDescription
        })
        return Alert.alert('Exchange posted succesfully')
    }
    

    render() {
        return (
          <View style={{flex:1}}>
           <Header 
            backgroundColor={'pink'}
            centerComponent={{
            text:'Exchange',
            style:{fontSize:25,color:'black'}
            }}/>
            
            <TextInput 
            styles={[styles.input,{marginTop:60}]}
            onChangeText={(text)=>{this.setState({email:text})}}
            placeholder={"Item"}/>
            
            <TextInput 
            styles={[styles.input,{marginTop:60,width:110,length:30}]}
            onChangeText={(text)=>{this.setState({password:text})}}
            placeholder={"Item Description"}
            multiline={true}/>

            <TouchableOpacity
            style={styles.but}
            onPress={()=>{}}><Text>Submit</Text></TouchableOpacity>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    input:{
        width:200,
        height:20,
        borderColor:'black',
        color:'black',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        borderWidth:1,
        marginTop:15,
        borderColor:'black'
    },
    but:{
        marginTop:15,
        alignSelf:'center',
        width:70,
        height:30,
        backgroundColor:'red',
        color:'green'
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
      },
      loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#ff8a65',
        fontSize: 20,
        margin:10,
        paddingLeft:10
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
     
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
     
})