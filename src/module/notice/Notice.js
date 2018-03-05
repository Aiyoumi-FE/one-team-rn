import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        tabBarLabel: '通知',
        tabBarIcon: ({tintColor}) => (<Image source={require('../../images/notice.png')} style={[{tintColor: tintColor}, styles.tabIcon]}/>),
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View>
                <Button title="通知" onPress={() => navigate('Home')} />
                <Text>这是通知的内容</Text>
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