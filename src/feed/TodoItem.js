import React, { Component } from 'react';
import {
    Alert,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Swipeable from 'react-native-swipeable';
import {CircularView} from '../commonComponents';
import { getTodosList,deleteTodo,markComplete } from "../actions";

class TodoItem extends Component {
 
  render() {
    const { id, description, tagColor, tstamp, isComplete } = this.props.todo;
    var date = new Date(tstamp);
    var today = new Date();
    var dueDescription = tstamp;
    if(date.getFullYear()==today.getFullYear() && date.getMonth()== today.getMonth()){
        if(date.getDate()==today.getDate()){
            dueDescription = "Due Today";
        }else if(date.getDate()+1==today.getDate()){
            dueDescription ="Due Yesterday";
        }else if(date.getDate()==today.getDate()+1){
            dueDescription ="Due Tomorrow";
        }else{
            dueDescription =date;    
        }
    }else{
        dueDescription =date;
    }
    const rightButtons = [
    <TouchableOpacity 
        onPress={()=>{
            this.ShowAlert("Mark Complete","Are you sure you want to mark complete?"
            ,()=>{this.props.markComplete(id)}
            );
        }}
        style={{justifyContent:"center",flex:1,backgroundColor:"#4CDB62"}}>
        <Text style={{marginLeft:3,color:"#fff"}}>Complete</Text>
    </TouchableOpacity>,
    <TouchableOpacity 
        onPress={()=>{
            this.ShowAlert("Delete","Are you sure you want to delete?"
            ,()=>{this.props.deleteTodo(id)}
            );
        }}
        style={{justifyContent:"center",flex:1,backgroundColor:"#FF0000"}}>
        <Text style={{marginLeft:3,color:"#fff"}}>Delete</Text>
    </TouchableOpacity>
    ];
    return (
    <Swipeable rightButtons={rightButtons}>
      
    
      <View
        style={{flex:1,flexDirection:'row',paddingLeft:5,paddingRight:5}}
      >
        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
        <CircularView 
            size={0.05}
            selectedTagColor={tagColor} 
            color={tagColor}>
        </CircularView>
        </View>
        <View style={{flex:6}}>
            <Text style={{fontSize:30}}>{description}</Text>
            <Text>{dueDescription.toString()}</Text>
        </View>
        <View style={{flex:1}}>
            {this.isComplete(isComplete)}
        </View> 
      </View>
      </Swipeable>
    );
  }
  
  isComplete(isComplete){
    if(isComplete){
        return(
            <Image
            style={{flex:1,alignSelf:"center",width:30,height:30,marginRight:10}}
            source={require('../images/iscomplete.png')} 
            resizeMode="contain"/>
        );
    }
    return (
        <View/>
    );
  }
  ShowAlert(heading,alertMessage,onPrses){
    Alert.alert(
        heading,
        alertMessage,
        [
        {text: 'OK', onPress: onPrses},
        ],
        { cancelable: true }
    )
}

}


const mapStateToProps = ({ todosList }) => {
  return { todosList};
}
export default connect(mapStateToProps, { getTodosList,deleteTodo,markComplete })(TodoItem);
