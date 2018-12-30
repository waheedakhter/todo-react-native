import React, { Component } from 'react';
import {Text,View} from 'react-native';

class ScreenHeader extends Component {
    
    constructor(props) {
        super(props);
    }

    

render () {
    
    return (
        <View style={{height:100,backgroundColor:"#4CDB62",justifyContent:"flex-end"}}>
        <Text style={{fontSize:30,fontWeight:"bold",color:"#fff",marginBottom:10,marginLeft:10}}>{this.props.text}</Text>
        </View>
    );
}



}

export {ScreenHeader};
