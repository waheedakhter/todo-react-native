import React, { Component } from 'react';
import {AsyncStorage,ToastAndroid,View,Text,Image} from 'react-native';
import { connect } from 'react-redux';
import {StackActions,NavigationActions} from 'react-navigation';
import {Button,CardSection,Input} from '../commonComponents'
class LoginScreen extends Component {
    static navigationOptions ={
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            name:""
        };
        this.checkLoginStatus();
    }

    checkLoginStatus(){
        AsyncStorage.getItem("IS_LOGGED_IN").then(
            (value)=>{
                if(value!=null && value=="true"){
                    this.navigateToMainScreen();
                }
            }
        );
    }

onNameChanged(name){
    this.setState({name:name});
}
render () {
    return (
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <View style={{flex:10,justifyContent:'center'}}>
            <Image
                style={{flex:1,alignSelf:"center"}}
                source={require('../images/todo.png')} 
                resizeMode="contain"/>
          
        </View>
        <CardSection>
            <Input 
                placeholder='Username'
                value={this.props.name} 
                onChangeText={this.onNameChanged.bind(this)}
                keyboardType={'default'}
            />
        </CardSection>
        <View style={{flex:1,justifyContent:'center'}}>
        <Button color={"#4CDB62"} textColor={"#ffffff"} visiblity  whenPressed={()=>{
            if(this.state.name.trim().length==0){
                ToastAndroid.show("Please Enter name",ToastAndroid.SHORT);
                return;
            }
            var propsTOSave = [
                ["NAME",this.state.name],
                ["IS_LOGGED_IN","true"]
            ];
    
            AsyncStorage.multiSet(propsTOSave).then(
                ()=>{
                   this.navigateToMainScreen();
                }    
            )
            
        }}>Login</Button>
        </View>
        </View>
    );
}


    navigateToMainScreen(){
        
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "MainScreen" })],
        });
        this.props.navigation.dispatch(resetAction);

    }
}



const mapStateToProps = (state) => {
    return {};
}
export default connect(store = mapStateToProps)(LoginScreen);
