import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text:''
    }
  }

  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay)
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = {"#1A5B96"}
          centerComponent = {{
            text:"Text to Speech",
            style:{color:"white",
            fontSize:20,
            fontFamily:'monospace'
            }}}
        />


        <TextInput
          style = {styles.inputbox}
          onChangeText={(text)=>{
            this.setState({text:text})
          }}
          placeholder = "Enter word here"
        />


        <TouchableOpacity style={styles.gobutton} 
        onPress={this.speak}>
          <Text style={styles.gotext}>Click here to hear speech</Text>
        </TouchableOpacity>


        <Image
          style = {{width:333, height:200}} 
          source = {require('./assets/tts.png')}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#6497B1',
  },
  inputbox:{
    marginTop: 20,
    width:"80%",
    height:40,
    borderWidth:3,
    alignSelf:'center',
    textAlign:'center',
    borderColor:'#B3CDE0'
  },
  gobutton:{
    alignSelf:'center',
    textAlign:'center',
    margin:10,
    width:'50%',
    height:50,
    borderWidth: 3,
    padding:7,
    borderColor:'#B3CDE0'
  },
  gotext:{
    fontFamily:'monospace',
    fontSize:15,
    color:"white",
    textAlign:'center'
  },
});
