import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    static navigationOptions = {
        title: '登录',
    }

    handleLogin() {
        const { email, password } = this.state;
        const regExp = {
            email: /^[\w-]+@[\w-]+\.[a-zA-Z]{2,3}$/,
        };

        if (!regExp.email.test(email)) {
            Alert.alert('提示', '请输入正确的邮箱格式');
            return;
        }
    }

    render() {
        const navigate = this.props.navigation.navigate;

        return (
            <View style={styles.view}>
                <View style={styles.graphicWrap}>
                    <Image source={require('@images/graphic.png')} style={styles.graphic} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="邮箱"
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="密码"
                    password={true}
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Text onPress={() => navigate('Register')} style={styles.forgetPsd}>忘记登录密码</Text>
                <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={this.handleLogin.bind(this)}>
                    <View style={styles.button}>
                        <Text style={{ color: '#fff' }}>登录</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.bottomText}>还没有加入 One Team？<Text onPress={() => navigate('Register')} style={{ color: '#0b9dff' }}>点击这里</Text>加入吧！</Text>
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
        borderRadius: 5,
        borderColor: '#797979'
    },
    forgetPsd: {
        marginTop: -10,
        marginBottom: 20
    },
    button: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09f',
        borderRadius: 5
    },
    bottomText: {
        marginTop: 10
    }
});
