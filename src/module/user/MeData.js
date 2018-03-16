import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet} from 'react-native';
import Toast from "react-native-root-toast";

// 引入mobx 数据
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class MeData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigator: props.navigation.navigate,
            username: '',
            email: '',
            avatar: ''
        };
    }
    static navigationOptions = {
        title: '个人资料',
    }

    _save() {
        const { username, email } = this.state;
        const store = this.props.store
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
        if (username === '' && userData.username ==='') {
            tip('请输入正确的昵称');
            return false;
        }
        if (!regExp.email.test(email) && !regExp.email.test(userData.email)) {
            tip('亲，输入正确的邮箱格式');
            return false;
        }
        // 此处调用后台
        if(username !== store.username || email !== store.email ) {
            let postname =  username !== store.username? username: store.username;
            let postemail =  email !== store.email? email: store.email

            store.changeUserName(postname)
            store.changeEmail(postemail)
            this.props.navigation.navigate('SetUp')
        }
    }
    render() {
        const store = this.props.store
        return (
            <View>
                <View style={styles.avatar}>
                    <Text style={styles.text}>头像</Text>
                    <Image source={{uri: store.avatar}} style={{width: 50, height: 50,borderRadius: 50,}} />
                </View>
                <View style={styles.uList}>
                    <Text style={styles.text}>昵称</Text>
                    <TextInput
                        style={{height: 50, width: 250}}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        placeholder={store.userName}
                        underlineColorAndroid ="transparent"
                    />

                </View>
                <View style={styles.uList}>
                    <Text style={styles.text}>邮箱</Text>
                    <TextInput
                        style={{height: 50, width: 250}}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        placeholder={store.email}
                        underlineColorAndroid ="transparent"
                    />

                </View>
                <View style={styles.submitview}>
                    <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={this._save.bind(this)}>
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
    text: {
      fontSize: 14,
      color: '#222',
      paddingRight: 15,
      paddingLeft: 10,
    },
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
    avatar: {
        height:80,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor: '#eee'
    },
    uList: {
        height:50,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor: '#eee'
    }
});