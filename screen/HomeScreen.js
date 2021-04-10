import React from 'react';
import { Text, View,ScrollView,TouchableOpacity,StyleSheet,FlatList, TextInput, Alert,Modal} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {ListItem} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { SnapshotViewIOS } from 'react-native';

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            requestedList:[]
        }
        this.requestedRef=null
    }
    getRequestedList=()=>{
        this.requestedRef = db.collection('exchange_requests')
        .onSnapshot((snapshot)=>{
            var requestedList = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                requestedList:requestedList
            })
        })
    }
    componentDidMount(){
        this.getRequestedList()
    }
    componentWillUnmount(){
        this.requestRef();
      }
      keyExtractor = (item,index)=>{index.toString()}
      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.itemName}
            subtitle={item.description}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}
                  onPress ={()=>{Alert.alert('ok')}}>
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
            bottomDivider
          />
        )
      }
    render() {
        return (
          <View style={{flex:1}}>
             <FlatList 
             keyExtractor={this.keyExtractor()}
             data={this.state.requestedList}
             renderItem={this.renderItem()}
             />
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