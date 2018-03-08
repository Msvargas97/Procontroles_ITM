import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

import { connect } from 'react-redux'
import KeyboardHandler from '../../../../components/KeyboardHandler';
import { reduxForm, reset } from 'redux-form';
import realm, { ACCOUNT_SCHEMA } from "../../../../config/database";
import Field from '../../../../components/Fields';
import Toast from 'react-native-simple-toast';
import { TextField } from 'react-native-material-textfield';
import { Button } from "react-native-elements";
import Ripple from 'react-native-material-ripple';

import styles from "./styles";
import { color } from "../../../../config"
import validate from "./validate";



const LoginScreen = (props) => {
    const account = realm.objectForPrimaryKey(ACCOUNT_SCHEMA, 0);
    let isLoggedin = (account) ? account.login : false;
    let isFetchingLogin = false;
    const isConnected = props.screenProps.network.isConnected;
    const { anyTouched, handleSubmit, submitting, reset, submitSucceeded, navigation : {navigate} } = props;
    
    const submit = (values) => {
        //alert(`${JSON.stringify(values,null,2)}`)
        //props.fetchLogin(values);
        return new Promise((resolve, reject) => resolve());
    } 

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }} >
            <KeyboardHandler ref={ref => this.kh = ref} offset={95} contentContainerStyle={{ alignItems: 'stretch', backgroundColor: 'white' }} >
                <Image
                    style={{ height: 200, width: 300, alignSelf: 'center' }}
                    source={require('../../../../images/logo.png')}
                    resizeMode='contain' />

                <View style={{ flexGrow: 1, paddingHorizontal: 20 }} >
                    <Field
                        name="username"
                        leftIcon="account"
                        suffix="Email o C.C"
                        label="Usuario"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onSubmitEditing={() => {
                            this.field2.getRenderedComponent().input.getRenderedInput().focus();
                        }}
                        onFocused={(event) => this.kh.inputFocused(event)} />
                    <Field
                        inputRef={(ref) => this.field2 = ref}
                        name="password"
                        type="password"
                        label="Contraseña"
                        autoCapitalize="none"
                        focusNext={false}
                        onSubmitEditing={handleSubmit(submit)}
                        onFocused={(event) => this.kh.inputFocused(event)} />
                    <Button
                        title={(!isLoggedin ? 'INICIAR SESIÓN' : 'CERRAR SESIÓN')}
                        buttonStyle={{ height: 50, marginTop: 30, }}
                        onPress={ handleSubmit(submit) }
                        //onPress={(!isLoggedin) ? handleSubmit : () => { this.logout(); reset(); }}
                        loading={(isFetchingLogin === true) ? true : false}
                        large
                        loadingRight
                        rounded
                        backgroundColor={color.primary}
                        disabledStyle={(isConnected) ? { backgroundColor: color.primary } : undefined}
                        disabled={(!isConnected || isFetchingLogin) ? true : false} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'center' }}>
                    <Ripple style={{ marginTop: 30, marginBottom: 30 }}
                        onPress={() => navigate('Register')}>
                        <Text style={styles.footer}>No tienes una cuenta?<Text style={styles.hyperLink}> Registrate</Text></Text>
                    </Ripple>
                    <Text style={styles.footer}>{"Calle 21A Nº 8 - 62\nBucaramanga - Santander\n(+57) 313 454 0706 - (+57) 697 8625\n"}</Text>
                    <Image source={require('../../../../images/logo_co.png')} style={{ width: 32, height: 32, }} />
                    <Text style={{ fontWeight: 'bold' }}>Copyright © 2018</Text>
                    {/* <Text>{JSON.stringify(props, null, 2)}</Text> */}
                </View>
            </KeyboardHandler>
        </View>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (payload) => {
            /* dispatch(fetchLoginAction({
                username: ((validation.isNumber(payload.username)) ?
                    normalize.numberWithDots(payload.username) : payload.username),
                password: payload.password
            })) */

        },
        resetForm: () => {
            dispatch(reset(LOGIN_FORM))
        }

    };
}

const LoginReduxForm = reduxForm({
    form: 'Login', // a unique identifier for this form
    enableReinitialize: true, //Borra los campos cuando se llama la funcion reset
    //onSubmit: submit ,
    validate,

})(LoginScreen);

export const Login = connect(null, mapDispatchToProps)(LoginReduxForm);

