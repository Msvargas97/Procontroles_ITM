import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, FlatList, ToastAndroid, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import { TextField } from 'react-native-material-textfield'
import PropTypes from 'prop-types';
import { IconToggle } from '../Icon';
import { InputBase } from './InputBase'
//color

export class InputText extends React.Component{
    constructor(props) {
      super(props)
    
      this.getRenderedInput = this.getRenderedInput.bind(this)

    }
    
    getRenderedInput(){
        return this.input;
    }
    render(){
        return (
            <InputBase inputRef={ref => this.input = ref}  {...this.props} />
        )
    }
}
 /* class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.focus = this.focus.bind(this);
        this.clear = this.clear.bind(this);
        this.focus = this.focus.bind(this);
        this.focusState = this.focusState.bind(this);
        this.isFocused = this.isFocused.bind(this);
        this.state = {
            focused: false
        };
    };
    focus() { this.input.focus() }
    clear() { this.input.clear() }
    blur() { this.input.blur() }
    focusState() { return this.input.focusState() }
    isFocused() { return this.intput.isFocused() }
    render() {
        const { meta: { touched, error, warning, asyncValidating, pristine, dirty, visited },
            input: { value, onChange, onFocus, onBlur },
            onFocused, refField, onEnter, typeField, onSubmitEditing, ...othersProps }
            = this.props;
        let leftIcon = this.props.leftIcon;
        const { focused } = this.state;

        if (leftIcon != undefined) {
            if (typeof leftIcon == 'string') {
                const name = leftIcon;
                leftIcon = { name };
            }
            if (!leftIcon.size) leftIcon.size = 24
            if (!leftIcon.style) leftIcon.style = { marginRight: 16, marginTop: 28, alignSelf: 'flex-start', }
        }
        const renderLeftIcon = () => (
            (leftIcon) ? <Icon {...leftIcon} /> : undefined
        )
        return (
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', }}>
                {renderLeftIcon()}
                <TextField
                    containerStyle={{ flex: 1 }}
                    ref={ref => this.input = ref}
                    value={value}
                    onSubmitEditing={() => {
                        if (onEnter !== undefined) onEnter();
                        if (onSubmitEditing !== undefined) onSubmitEditing();
                    }}
                    onBlur={(e) => {
                        if (onBlur) onBlur(e);
                        this.setState({ focused: false });
                    }}
                    onChange={onChange}
                    onFocus={(event) => {
                        this.setState({ focused: true });
                        if (onFocus) onFocus(event)
                        if (onFocused) onFocused(event)
                    }}
                    error={(!error) ? undefined : (touched && dirty) ? <Text><Icon name='ios-information-circle-outline' size={14} /> {error}</Text> : undefined}
                    {...othersProps}
                    renderAccessory={() =>
                        (focused) ?
                            <IconToggle
                                name='close-circle-outline'
                                color='gray'
                                style={{
                                    marginBottom: 10
                                }}
                                onPress={() => {
                                    //this.input.clear();
                                    onChange('')
                                }}
                            />
                            :
                            undefined
                    }
                />
            </View>
        )
    }
} */