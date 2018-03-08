import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, FlatList, ToastAndroid, Platform } from 'react-native';
import Ripple from 'react-native-material-ripple'
import { TextField } from 'react-native-material-textfield'
import PropTypes from 'prop-types';
import { IconToggle, Icon } from '../Icon'


export class InputBase extends React.Component {
    constructor(props) {
        super(props)
    };
    
    render() {
        let { meta: { touched, error, warning, asyncValidating, pristine, dirty, visited },
            input: { onChange, value, onFocus, onBlur, ...restInput },
            onFocused, inputRef, onEnter, type, onSubmitEditing, leftIcon, rightIcon, focusNext, ...othersProps }
            = this.props;

        if (leftIcon != undefined) {
            if (typeof leftIcon == 'string') {
                const name = leftIcon;
                leftIcon = { name };
            }
            if (!leftIcon.size) leftIcon.size = 24
            if (!leftIcon.style) leftIcon.style = { marginRight: 16, marginTop: 28, alignSelf: 'flex-start', }
        }
        if (rightIcon != undefined) {
            if (typeof rightIcon == 'string') {
                const name = rightIcon;
                rightIcon = { name };
            } else if (rightIcon === true) {
                rightIcon = { name: 'close-circle' };
            }
            if (!rightIcon.size) rightIcon.size = 24
        }
        const renderLeftIcon = () => (
            (leftIcon) ? <Icon {...leftIcon} /> : undefined
        )
        const renderRigthIcon = () => (
            (rightIcon) ? <IconToggle {...rightIcon}  style={[{margin: 15},(rightIcon.style) ? rightIcon.style : {}]}/> : null
        )
        return (
            <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', }}>
                {renderLeftIcon()}
                <View style={{ flex: 1 }}>                   
                 <TextField 
                        {...othersProps}
                        //ref={ref => this.input = ref}
                        ref={inputRef}
                        containerStyle={{ flex: 1, alignSelf : 'stretch' }}

                        
                        value={value}
                        onSubmitEditing={onSubmitEditing}
                        onBlur={(e) => {
                            if (onBlur) onBlur(e);
                        }}
                        onChangeText={(text) => {
                            onChange(text);
                        }}
                        onFocus={(event) => {
                            if (onFocus) onFocus(event)
                            if (onFocused) onFocused(event)
                        }}
                        error={touched && error && <Text><Icon name='alert-circle-outline' size={14} /> {error}</Text>}
                    />
                    {(rightIcon) ?
                                <View style={[StyleSheet.absoluteFill, { justifyContent: 'center',alignItems: 'flex-end', top : (touched && error) ? 0 : 16}]}>
                                    {renderRigthIcon()}  
                                </View> :
                                    null}
                </View>
            </View>
        )
    }
}

TextField.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
