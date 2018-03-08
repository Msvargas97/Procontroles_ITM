import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import { connect } from 'react-redux';
import { Home, Login } from "../components/screens";
import { header } from "../../config"

const routerConfig = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
        }),
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: 'Procontroles',
        }),
    }
}

const stackConfig = {
    initialRouteName: 'Login',
    navigationOptions: {
        gesturesEnabled: false,
        ...header
    }
};

//Navigator principal de la App
const MainStack = StackNavigator(routerConfig, stackConfig);

export default MainStack;