import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';
import Login from '@module/user/Login';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.doLogin();
    }

    static navigationOptions = {
        title: '首页',
    }

    doLogin() {
        const isLogin = false;
        if (!isLogin) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        return (
            <View>
                <Text>这是首页的内容</Text>
            </View>
        );
    }
}