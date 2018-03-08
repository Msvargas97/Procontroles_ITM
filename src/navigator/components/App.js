import React, { Component } from 'react';
import {
    StackNavigator,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation';
import { AppNavigator } from './AppNavigator'
import { addListener } from "../../store/configureStore";
import { connect } from 'react-redux';
import { BackHandler, Alert, StatusBar, View, Platform } from 'react-native'
import Toast from 'react-native-simple-toast';
import { color } from '../../config'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.exit = false;
        StatusBar.setBarStyle('light-content', true);
        StatusBar.setBackgroundColor(color.primaryDark, true);
        if (Platform.OS === 'ios') StatusBar.setNetworkActivityIndicatorVisible(false);
        StatusBar.setTranslucent(false);
    };
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        const index = nav.index;
        const current = nav.routes[index].routes;
        const nameScreen = current[0].routeName;

        if (nav.index === 0) {
            if (this.exit === true) {
                return false;
            }
            this.exit = !this.exit;
            //SnackBar.show('Presione una vez más para salir de la aplicación');
            Toast.showWithGravity('Presione una vez más para salir de la aplicación', Toast.LONG, Toast.CENTER);
            this.setState({ visible: true })
            setTimeout(() => {
                this.exit = false;
            }, 3000)
        }
        // Toast.show(`length:${current.length} name:${current[0].routeName}`, ToastAndroid.LONG);
        /*     if (nameScreen === REPORT_SCREEN) {
                Alert.alert(
                    'Guardar informe',
                    'Desea guardar los cambios realizados al informe?',
                    [
                        { text: 'Cancelar', onPress: () => { } },
                        { text: 'NO', onPress: () => dispatch(NavigationActions.back()), style: 'cancel' },
                        {
                            text: 'SI', onPress: () => {
                                ToastAndroid.show('Informe guardado exitosamente', ToastAndroid.SHORT);
                                dispatch(NavigationActions.back());
                            }
                        },
                    ],
                    { cancelable: false }
                )
            } else { */
        dispatch(NavigationActions.back());
        //}
        return true;
    };
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: { ...this.props.nav },
                addListener,
            })}
                screenProps={{ network: this.props.network }}
            />
        );
    }
}

