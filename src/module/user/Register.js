import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Register extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: '注册',
    }

    render() {
        return (
            <View>
                <Text>这是注册的内容</Text>
            </View>
        );
    }
}