import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (<Image source={require('../../images/setting.png')} style={[{tintColor: tintColor}, styles.tabIcon]}/>),
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View>
                <Button title="注册" onPress={() => navigate('Home')} />
                <Text>这是注册的内容</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});