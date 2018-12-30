import React, { Component } from 'react';
import {Text,View,FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getTodosList } from "../actions";
import {Button,ScreenHeader} from '../commonComponents'
import TodoItem from "./TodoItem";

class FeedScreen extends Component {
    static navigationOptions ={
        header:null
    }
    constructor(props) {
        super(props);
        
    }

    componentWillMount(){
        this.props.getTodosList();
    }

render () {
    var todosList;
    this.props.todosList?todosList=this.props.todosList:todosList=[];
    if(todosList.length==0){
        var body = (
            <View style={{flex:1}} />
        );
    }else{
        body = (
            <FlatList
                data = {todosList}
                extraData = {this.state}
                renderItem = {({ item }) => (
                <TodoItem  todo={item}/>)}
                keyExtractor = {item => item.id}>
            </FlatList>
        );
    }
            return (
                <View style={{flex:1,backgroundColor:'#ffffff'}}>
                <ScreenHeader text={"Todo"}/>
                <View style={{flex:8,justifyContent:'center'}}>
                    {body}
                </View>
                </View>
            );
    
}



}



const mapStateToProps = (state) => {
    return {todosList:state.todosList.todosList};
}
export default connect(store = mapStateToProps, { getTodosList })(FeedScreen);
