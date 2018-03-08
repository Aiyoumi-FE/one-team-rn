import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: '登录',
    }
    
    render() {
        return (
            <View>
                <Text>this is 登录页</Text>
            </View>
        );
    }
}