import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

const Input = ({multiline,onContentSizeChange,placeholderTextColor,autoCapitalize, selectionLength,textColor,customStyle, multipleLines, label, value, onChangeText, placeholder, secureTextEntry, editable, touchDisabled, onPress, keyboardType, numOfCharacters}) => {
    const { inputStyle,
    labelStyle,
containerStyle } = styles
if(label!=null && label!=="") {
    return(
        <View style={containerStyle}>
            <Text style = {[labelStyle,customStyle]}>{label}</Text>
            <View hitSlop = {{top: 15, bottom: 15, left: 0, right: 0}}  style = {inputStyle} disabled = {touchDisabled} >
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    numOfCharacters={10}
                    style={{
                            color: textColor == null? '#000':textColor,
                            paddingRight: 15,
                            paddingLeft: 5,
                            fontSize: 16,
                            lineHeight: 20,
                            
                            }}
                    defaultValue={value}
                    onChangeText={onChangeText}
                    editable={editable}
                    keyboardType = {keyboardType}
                    maxLength = {numOfCharacters}
                    hitSlop = {{top: 15, bottom: 15, left: 0, right: 0}} 
                  //  multiline = {multipleLines? true : false}
                    numberOfLines = {multipleLines? 3: 1}
                    maxHeight={100}
                    autoCapitalize = {autoCapitalize}
                    placeholderTextColor = {placeholderTextColor}
                    onContentSizeChange={onContentSizeChange}
                    multiline={multiline}
                    
                    
                />
            </View>
            </View>
        );
}else {
    var start = selectionLength;
    var end = selectionLength;
    var numberOflines =  multiline?4:1;
    return(
        <View style={containerStyle}>
            <TouchableOpacity style = {inputStyle} disabled = {touchDisabled} >
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={{
                            color: '#000',
                            paddingRight: 15,
                            paddingLeft: 5,
                            fontSize: 16,
                            fontFamily: 'verdana'
                            }}
                    defaultValue={value}
                    //selection={secureTextEntry?{start,end}:{start,end}}
                    onChangeText={onChangeText}
                    editable={editable}
                    keyboardType = {keyboardType}
                    maxLength = {numOfCharacters}
                    autoCapitalize = {autoCapitalize}
                    placeholderTextColor = {placeholderTextColor}
                    onContentSizeChange={onContentSizeChange}
                    multiline={multiline}
                    numberOfLines = {numberOflines}
                />
            </TouchableOpacity>
            </View>
        );
        
}
};

const styles={
inputStyle: {
    flex: 2,
    borderWidth:1,
    borderColor:'#999999'
},
labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
},
containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

}
};

export { Input }