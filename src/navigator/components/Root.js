import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Provider, connect } from 'react-redux';
import  store from "../../store/configureStore";
import {AppContainer as App} from "../containers";

export const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)
