import React from 'react';
import { View } from 'react-native';

var color = '';
var flexDirection = '';
var customStyles;
const CardSection = (props) => {
    customStyles = props.customStyle
    color = props.color === void 0? '#ffffff' : props.color;
    flexDirection = props.flexDirection === void 0? 'row' : props.flexDirection
    height=props.height;
    
    return (
    <View style={[styles.containerStyle,customStyles]}>
        {props.children}
    </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        
    }
};

export { CardSection };
