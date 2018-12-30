import React, { Component } from 'react';
import {AsyncStorage,ToastAndroid,View,Text,Image} from 'react-native';
import { connect } from 'react-redux';
import {StackActions,NavigationActions} from 'react-navigation';

class SplashScreen extends Component {

    static navigationOptions ={
        header:null
    }
    constructor(props) {
        super(props);
        setTimeout( () => {
            this.checkLoginStatus();
          },2000);
        
    }

    checkLoginStatus(){
        AsyncStorage.getItem("IS_LOGGED_IN").then(
            (value)=>{
                var screen = "Login";
                if(value!=null && value=="true"){
                    screen = "MainScreen";
                }
                this.navigateToScreen(screen);
            }
        );
    }


render () {
    return (
        <View style={{flex:1,backgroundColor:'#ffffff',justifyContent:'center'}}>
            <Image
                style={{flex:1,alignSelf:"center"}}
                source={require('./images/todo.png')} 
                resizeMode="contain"/>
          
        </View>
       
    );
}


    navigateToScreen(screen){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: screen })],
            });
            this.props.navigation.dispatch(resetAction);
    }
}



const mapStateToProps = (state) => {
    return {};
}
export default connect(store = mapStateToProps)(SplashScreen);
