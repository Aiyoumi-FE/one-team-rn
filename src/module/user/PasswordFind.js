import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet} from 'react-native';
import Toast from "react-native-root-toast";

export default class PasswordFind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            vcode: '',
        };
    }
    static navigationOptions = {
        title: '找回密码',
    }

    // 点击事件的方法
    _onPressButton() {
        Alert.alert('功能开发中，敬请期待...')
    }
    _submit() {
        const { vcode, email } = this.state;
        // 定义提示框公共样式
        const tip = (msg) => {
            Toast.show(msg, {
                position: Toast.positions.CENTER,
                backgroundColor: '#09f',
            })
        }
        const regExp = {
            email: /^[\w-]+@[\w-]+\.[a-zA-Z]{2,3}$/
        };
        if (vcode === '') {
            tip('请输入验证码');
            return false;
        }
        if (!regExp.email.test(email)) {
            tip('亲，输入正确的邮箱格式');
            return false;
        }
    }

    render() {
        return (
            <View>
                <View style={{padding: 10, backgroundColor: '#fff'}}>
                    <View style={styles.uList}>
                        <TextInput
                            style={{height: 50, width: 250}}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            placeholder="邮箱"
                            underlineColorAndroid ="transparent"
                        />
                        <Text style={styles.vcode}>发送验证码</Text>
                    </View>
                    <TextInput
                        style={{height: 50, borderColor: '#eee', borderBottomWidth: 1}}
                        onChangeText={(vcode) => this.setState({vcode})}
                        value={this.state.vcode}
                        placeholder="验证码"
                        underlineColorAndroid ="transparent"
                    />
                </View>
                <View style={styles.submitview}>
                    <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={this._submit.bind(this)}>
                        <View style={styles.button}>
                            <Text style={{ color: '#fff' }}>保存</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    submitview: {
        margin: 5,
        marginTop: 40
    },
    button: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09f',
    },
    uList: {
        height:50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderBottomColor: '#eee'
    },
    vcode: {
        color: '#09f',
        fontSize: 12
    }
});