import React, { Component } from 'react';
import {Text,View,ToastAndroid} from 'react-native';
import { connect } from 'react-redux';
import realm from '../database/realm';
import { toDoSaved } from "../actions";
import {CircularView,DatePickerDialogBox,Button,ScreenHeader,CardSection,Input} from '../commonComponents'
class AddScreen extends Component {
    static navigationOptions ={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            description:"",
            date:new Date(),
            tagColor:"#4C8FE0",
            showDatePicker:false
        };
    }


render () {
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <ScreenHeader text={"Add"}/>
        <View style={{flex:8,justifyContent:'space-between'}}>
        <CardSection>
            <Input 
                placeholder='When do you need to do?'
                value={this.state.description} 
                onChangeText={(description)=>{this.setState({description:description})}}
                keyboardType={'default'}
                multiline={true}
            />
        </CardSection>
        <DatePickerDialogBox visible={this.state.showDatePicker} date = {this.state.date} 
            dateSelected={
                (dateSelected)=>{
                    if(dateSelected!=null){
                        this.setState({date:dateSelected,showDatePicker:false})
                    }else{
                        this.setState({showDatePicker:false})
                    }
                }
            }
        >
        </DatePickerDialogBox>
         <View style={{flex:1,justifyContent:'center'}}>
        <Button height={50} borderColor ="#dddddd" color={"#fff"} textColor={"#dddddd"} visiblity  whenPressed={()=>{
            this.setState({showDatePicker:true})
            
        }}>When is it due?</Button>
        <View style={{flex:3,flexDirection: 'row',justifyContent:'space-between',marginTop:5}}>
            <CircularView selectedTagColor={this.state.tagColor} color="#4C8FE0" onPress={this.tagSelected.bind(this)} size={0.15}></CircularView>
            <CircularView selectedTagColor={this.state.tagColor} color="#DFF3C4" onPress={this.tagSelected.bind(this)} size={0.15}></CircularView>
            <CircularView selectedTagColor={this.state.tagColor} color="#FBC1C5" onPress={this.tagSelected.bind(this)} size={0.15}></CircularView>
            <CircularView selectedTagColor={this.state.tagColor} color="#F0C0FB" onPress={this.tagSelected.bind(this)} size={0.15}></CircularView>
            <CircularView selectedTagColor={this.state.tagColor} color="#FCEBC7" onPress={this.tagSelected.bind(this)} size={0.15}></CircularView>
        </View>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
        <Button color={"#4CDB62"} textColor={"#ffffff"} visiblity  whenPressed={()=>{
            if(this.state.description.trim().length==0){
                ToastAndroid.show("Please Enter todo description",ToastAndroid.SHORT);
                return;
            }
            if(this.state.date== null){
                ToastAndroid.show("Please Select Date",ToastAndroid.SHORT);
                return;
            }
            realm.write( () => {
                realm.create('Todo',{
                    id : new Date().getTime(),
                    tstamp:this.state.date.getTime(),
                    description:this.state.description,
                    tagColor:this.state.tagColor,
                    isComplete:false
                },true)
            });
            this.setState({description:""});
            this.props.toDoSaved();
        }}>Add</Button>
        <View style={{flex:3}}></View>
        </View>
        </View>
        </View>
    );
}

tagSelected(tagColor){
    this.setState({tagColor:tagColor})
}

}



const mapStateToProps = (state) => {
    return {};
}
export default connect(store = mapStateToProps,{toDoSaved})(AddScreen);
