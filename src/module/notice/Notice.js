import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: '通知',
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View>
                {/* <Button title="通知" onPress={() => navigate('Home')} /> */}
                <Text>这是通知的内容</Text>
            </View>
        );
    }
}