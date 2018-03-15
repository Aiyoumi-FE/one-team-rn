import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet} from 'react-native';
import Toast from "react-native-root-toast";

export default class PasswordMod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            newPassword1: '',
        };
    }
    static navigationOptions = {
        title: '修改密码',
    }

    // 点击事件的方法
    _onPressButton() {
        Alert.alert('功能开发中，敬请期待...')
    }
    _submit() {
        const { oldPassword, newPassword, newPassword1 } = this.state;
        // 定义提示框公共样式
        const tip = (msg) => {
            Toast.show(msg, {
                position: Toast.positions.CENTER,
                backgroundColor: '#09f',
            })
        }
        const regExp = {
            pwd: /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/,
        };
        if (oldPassword === '' ||newPassword === '' ||newPassword1 === ''  ) {
            tip('请输入密码');
            return false;
        }
        if (newPassword !== newPassword1) {
            tip('两次输入密码不一致');
            return false;
        }
        if (!regExp.pwd.test(newPassword) ||!regExp.pwd.test(newPassword1)) {
            tip('新密码长度6-12位，必须包含数字和字母，可包含其他字符！');
            return false;
        }
    }

    render() {
        return (
            <View>
                <View style={{padding: 10, backgroundColor: '#fff'}}>
                    <TextInput
                        style={{height: 50, borderColor: '#eee', borderBottomWidth: 1}}
                        onChangeText={(oldPassword) => this.setState({oldPassword})}
                        value={this.state.oldPassword}
                        placeholder="现有密码"
                        secureTextEntry ={true}
                        underlineColorAndroid ="transparent"
                    />
                    <TextInput
                        style={{height: 50, borderColor: '#eee', borderBottomWidth: 1}}
                        onChangeText={(newPassword) => this.setState({newPassword})}
                        value={this.state.newPassword}
                        placeholder="新密码"
                        secureTextEntry ={true}
                        underlineColorAndroid ="transparent"
                    />
                    <TextInput
                        style={{height: 50, borderColor: '#eee', borderBottomWidth: 1}}
                        onChangeText={(newPassword1) => this.setState({newPassword1})}
                        value={this.state.newPassword1}
                        placeholder="重复新密码"
                        secureTextEntry ={true}
                        underlineColorAndroid ="transparent"
                    />
                </View>
                <View style={styles.submitview}>
                    <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={this._submit.bind(this)}>
                        <View style={styles.button}>
                            <Text style={{ color: '#fff' }}>登录</Text>
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
});