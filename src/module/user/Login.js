import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: '登录',
        headerStyle: { borderBottomWidth: 1, borderBottomColor: '#e2e2e2' }
    }

    render() {
        const navigate = this.props.navigation.navigate;

        return (
            <View style={ styles.view }>
                <View style={ styles.graphicWrap }>
                    <Image source={require('@images/graphic.png')} style={ styles.graphic } />
                </View>
                <TextInput
                    style={ styles.textInput }
                    placeholder="邮箱"
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="密码"
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text style={ styles.forgetPsd }>忘记登录密码</Text>
                <Button title="登录" onPress={() => navigate('Register')} style={ styles.button } />
                <Text style={ styles.bottomText }>还没有加入 One Team？<Text style={{ color: '#0b9dff' }}>点击这里</Text>加入吧！</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 50,
        paddingRight: 30,
        paddingBottom: 400,
        paddingLeft: 30,
        backgroundColor: '#fff'
    },
    graphicWrap: {
        marginBottom: 50,
        alignItems: 'center'
    },
    graphic: {
        width: 100,
        height: 100
    },
    textInput: {
        height: 40,
        marginBottom: 15,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 0,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#797979'
    },
    forgetPsd: {
        marginTop: -10,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#09f'
    },
    bottomText: {
        marginTop: 5
    }
});
