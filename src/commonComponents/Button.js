import React,{Component} from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

var color = '';
var textColor = '';
var flex = 0;
var customFlex = 0;
var borderColor = null;
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton : props.visiblity,
            disable : props.disable,
            onPress : props.whenPressed,
            text : props.children,
            color : props.color === void 0? 'white' : props.color,
            textColor : props.textColor === void 0? '#000' : props.textColor,
            customStyle: props.customStyle
        }
        props.borderColor?borderColor=props.borderColor:borderColor=props.color;
        color = props.color;
        textColor = props.textColor;
        height = props.height == null ? 0 : props.height;
        width = props.width == null ? 0 : props.width;
        props.noFlex?flex=0:flex=1
        customFlex = props.customFlex!=null?customFlex:0
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            showButton : newProps.visiblity,
            onPress : newProps.whenPressed,
            text : newProps.children,
            disable : newProps.disable,
            color : newProps.color,
            textColor : newProps.textColor
        });
        color = newProps.color;
        textColor = newProps.textColor;
        height = newProps.height == null ? 0 : newProps.height;
        width = newProps.width == null ? 0 : newProps.width;
        caller = newProps.caller;
        customFlex = newProps.customFlex!=null?customFlex:0
    }
    render() {
        return (
            <TouchableOpacity 
                style = {this.renderStyle()}
                onPress={this.state.onPress} 
                disabled = {this.state.disable} >
                    <Text style={[styles.textStyle,{
                        color: textColor
                        }]}> {this.state.text} 
                    </Text>
            </TouchableOpacity>
        );
    }
    renderStyle() {
        if(this.state.showButton === true) {
            return [styles.buttonStyle, {backgroundColor: color, 
                borderColor: borderColor, flex:customFlex!=0?customFlex:flex},this.state.customStyle];
        }
    }
}
const styles = {
    buttonStyle: {
        justifyContent:'center',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:5
},
    textStyle: {
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
    }
};

export { Button };
