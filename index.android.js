import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet, ScrollView} from 'react-native';
  
export default class RoyhanRahim extends Component{
  render(){
    var looping =[];
    for (let i = 0; i < 15; i++) {
      looping.push(
        <View style={styles.childOne}>
          <View style={styles.oneChild}>
          </View>
          <Text style={{color:'black', fontSize:15}}>Hello React Native !!</Text>
        </View>
      )
    }
    return(
      <View style={styles.container}>
       <View style={styles.flexOne}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Title</Text>
       </View>
       
       <View style={styles.flexTwo}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        { looping }
        </ScrollView>
       </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },

  flexOne:{
    flex:0.5,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#1A237E',
  },

  flexTwo:{
    flex:5,
    flexDirection:'column-reverse',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#90CAF9',
    paddingBottom:5
  },
  
  childOne:{
    flex:1,
    width:350,
    height:100,
    backgroundColor:'white',
    marginBottom:5,
    flexDirection:'row',
    padding:5,
    borderRadius:5
  },

  contentContainer: {
    paddingVertical: 20,
  },

  oneChild:{
    width:100,
    height:90,
    backgroundColor:'#4527A0',
    marginRight:5,
    borderRadius:10
  },
});

AppRegistry.registerComponent('RoyhanRahim', ()=> RoyhanRahim);

