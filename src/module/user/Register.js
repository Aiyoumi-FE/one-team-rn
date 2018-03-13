import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import RadioModal from 'react-native-radio-master';
import Toast from 'react-native-root-toast';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', // 邮箱
            name: '', // 用户昵称
            pwd: '', // 密码
            repwd: '', // 确认密码
            inviteCode: '', // 邀请码
            inGroup: '0', // 类型（加入团队、创建团队）
        };
    }

    static navigationOptions = {
        title: '注册',
    }

    onSubmit() {
        // 定义提示框公共样式
        const tip = (msg) => {
            Toast.show(msg, {
                position: Toast.positions.CENTER,
                backgroundColor: '#09f',
            })
        }
        // 验证
        const { email, name, pwd, repwd, inviteCode, inGroup } = this.state;
        const regExp = {
            email: /^[\w-]+@[\w-]+\.[a-zA-Z]{2,3}$/,
            pwd: /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}$/,
        };
        if (email === '') {
            tip('请输入邮箱！');
            return;
        }
        if (!regExp.email.test(email)) {
            tip('邮箱格式不正确！');
            return;
        }
        if (name === '') {
            tip('请输入用户昵称！');
            return;
        }
        if (pwd === '') {
            tip('请输入密码！');
            return;
        }
        if (!regExp.pwd.test(pwd)) {
            tip('密码长度6-12位，必须包含数字和字母，可包含其他字符！');
            return;
        }
        if (repwd === '') {
            tip('请再次输入密码！');
            return;
        }
        if (pwd !== repwd) {
            tip('2次密码输入不一致！');
            return;
        }
        if (inviteCode === '') {
            tip('请输入团队邀请码！');
            return;
        }
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            if (res.success) {
                this.props.navigation.navigate('Login');
            } else {
                tip(res.msg);
            }
        })
            .catch((error) => {
                tip(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image source={require('@images/graphic.png')} style={styles.topimg} />
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="邮箱"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="用户昵称"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="6-12位字母数字密码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(pwd) => this.setState({ pwd })}
                    value={this.state.pwd}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="确认密码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(repwd) => this.setState({ repwd })}
                    value={this.state.repwd}
                    secureTextEntry={true}
                />
                <RadioModal
                    selectedValue={this.state.inGroup}
                    onValueChange={(id, item) => this.setState({ inGroup: id })}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        backgroundColor: '#ffffff',
                        marginBottom: 15,
                    }}
                >
                    <Text value="0">创建团队</Text>
                    <Text value="1">加入团队</Text>
                </RadioModal>
                <TextInput
                    style={styles.textInput}
                    placeholder="团队邀请码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(inviteCode) => this.setState({ inviteCode })}
                    value={this.state.inviteCode}
                />
                <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>登录</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.bottomText}>已经注册过了？<Text style={{ color: '#0b9dff' }} onPress={() => this.props.navigation.navigate('Login')}>直接登录</Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',

    },
    top: {
        paddingBottom: 40,
        alignItems: 'center',
    },
    topimg: {
        width: 100,
        height: 100,
    },
    textInput: {
        height: 40,
        marginBottom: 15,
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#797979',
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#09f',
        height: 40,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        lineHeight: 40,
        fontSize: 20,
    }
});
