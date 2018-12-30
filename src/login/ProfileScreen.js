import React, { Component } from 'react';
import {AsyncStorage,Text,View,ToastAndroid} from 'react-native';
import { connect } from 'react-redux';
import {StackActions,NavigationActions} from 'react-navigation';
import {Button,ScreenHeader} from '../commonComponents'
import realm from '../database/realm';
class ProfileScreen extends Component {
    static navigationOptions ={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            name:""
        };
        AsyncStorage.getItem("NAME").then(
            (name)=>{
                this.setState({name:name});
            }
        );
    }


render () {
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <ScreenHeader text={"Hello, " + this.state.name}/>
        <View style={{flex:8,justifyContent:'center'}}>
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
        <Button color={"#4CDB62"} textColor={"#ffffff"} visiblity  whenPressed={()=>{
        realm.write(() => {
            realm.delete(realm.objects("Todo"));
        })
        AsyncStorage.setItem("IS_LOGGED_IN","false").then(
            ()=>{
                const resetAction = StackActions.reset({
                    index: 0,
                    key:null,
                    actions: [NavigationActions.navigate({ routeName: "Login" })],
                });
                this.props.navigation.dispatch(resetAction);
            }    
        )
        
        }}>Logout</Button>
        </View>
        </View>
    );
}



}



const mapStateToProps = (state) => {
    return {};
}
export default connect(store = mapStateToProps)(ProfileScreen);
