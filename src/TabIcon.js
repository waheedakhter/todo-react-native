import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';
import { connect } from 'react-redux';
class TabIcon extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getImageSource(){
        if(this.props.tintColor=='#929292'){
            return this.getImage();
        }
        return this.getFocusedImage();
    }
    getImage(){
        switch(this.props.name){
            case "add":
                return require('./images/add.png');
            case "feed":
                return require('./images/feed.png');
            case "profile":
                return require('./images/profile.png');
        }
    }
    getFocusedImage(){
        switch(this.props.name){
            case "add":
                return require('./images/add_focused.png');
            case "feed":
                return require('./images/feed_focused.png');
            case "profile":
                return require('./images/profile_focused.png');
            
        }
    }

render () {
    
    return (
        <Image
            style={{flex:1,alignSelf:"center",backgroundColor:"#ffffff"}}
            source={this.getImageSource()} 
            resizeMode="contain"
        />
        
    );
}



}

export default TabIcon;
