import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: '首页',
    }

    render() {
        const navigate = this.props.navigation;
        const isLogin = false;
        if (isLogin) {
            // navigate('Login');
        } else {
            return (
                <View>
                    <Text>这是首页的内容</Text>
                </View>
            );
        }
    }
}