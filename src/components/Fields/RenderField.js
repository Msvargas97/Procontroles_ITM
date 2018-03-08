import React from 'react'
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Button, 
    FlatList, 
    ToastAndroid } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';
import { Field as Input } from "redux-form";
import { InputBase} from "./InputBase"
import { InputText } from "./InputText";
import { InputPassword } from './InputPassword';

export class RenderField extends React.Component {
    constructor(props) {
      super(props)
        
    }
    componentDidMount(){

    }
    render() {
        let { type, ...props } = this.props;
        props.ref = (ref) => this.input = ref;
        
        switch (type.toLowerCase()) {
            case 'text':
                return React.createElement(InputText, props);
            case 'password':
                return React.createElement(InputPassword,props);
            case 'default':
            default:
                return React.createElement(InputBase, props);
        }
    }
}