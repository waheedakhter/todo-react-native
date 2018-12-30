import React from 'react';
import {Text,View,Modal,StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CardSection} from './CardSection';
import {Button} from './Button';

var dialogHeader;
var dateChanged=null;

const DatePickerDialogBox = ({children,visible,date,dateSelected}) => {
    const {cardSectionStyle,
        textStyle,
        containerStyle,
        dialogContainer
    }=styles;
    dialogHeader = styles.dialogHeader;
    dateChanged=null;
    return(
        <Modal
            visible={visible}
            transparent
            onRequestClose={()=>{console.log("closing modal")}}
        >
        
            <View style={containerStyle}>
                <View style={dialogContainer}>
                    <CardSection customStyle={dialogHeader}>
                        <Text style={textStyle}>
                            {children}
                        </Text>
                    </CardSection>
                    <CardSection customStyle={cardSectionStyle}>
                    <DatePicker
                        date={date}
                        onDateChange={(date)=>{dateChanged=date;}}
                    /> 
                    
                    </CardSection>
                    <CardSection customStyle={cardSectionStyle}>
                    <Button color={"#4CDB62"} textColor={"#fff"} visiblity  whenPressed={()=>{
                        dateSelected(dateChanged);
            
                    }}>Select</Button>   
                    <Button color={"#4CDB62"} textColor={"#fff"} visiblity  whenPressed={()=>{
                        dateSelected(null);
            
                    }}>Cancel</Button>   
                    </CardSection>
                    
                </View>
            </View>
            
        </Modal>
    );

};

const styles = StyleSheet.create({
    dialogHeader:{
        justifyContent: 'center',
        backgroundColor: '#4CDB62',
    },
    cardSectionStyle    :{
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding:50,
    },
    buttonStyle    :{
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },

    textStyle:{
        flex:1,
        fontSize:18,
        textAlign: 'center',
        color:"#ffffff"
    },
    containerStyle:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.75)'
    },
    dialogContainer:{
        margin:10
    }
});

export {DatePickerDialogBox};