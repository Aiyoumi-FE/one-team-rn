import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (<Image source={require('../../images/index.png')} style={[{tintColor: tintColor}, styles.tabIcon]}/>),
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View>
                <Button title="首页" onPress={() => navigate('Register')} />
                <Text>这是首页的内容</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    }
});
