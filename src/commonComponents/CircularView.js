import React, { Component } from 'react';
import { Dimensions, TouchableHighlight, View } from 'react-native';

class CircularView extends Component {
    
    constructor(props) {
        super(props);
      
    }

    

render () {
    var opacity=.2;
    this.props.selectedTagColor==this.props.color?opacity=1:null;
    return (
    
        <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 5,
        width: Dimensions.get('window').width * this.props.size,
        height: Dimensions.get('window').width * this.props.size,
        backgroundColor:this.props.color,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:opacity
      }}
      underlayColor = '#ccc'
      onPress = { ()=>{
          this.props.onPress?this.props.onPress(this.props.color):null;
      } }
    >
      <View/>
    </TouchableHighlight>
    
    );
}



}

export {CircularView};
