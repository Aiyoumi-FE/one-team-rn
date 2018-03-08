import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: '我的',
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View>
                <Text>这是我的的内容</Text>
            </View>
        );
    }
}