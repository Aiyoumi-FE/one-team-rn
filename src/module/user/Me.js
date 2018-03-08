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
        const navigate = this.props.navigation;
        return (
            <View>
                {/* <Button title="我的页面" onPress={() => navigate('Home')} /> */}
                <Text>这是我的的内容</Text>
            </View>
        );
    }
}