import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet} from 'react-native';

export default class SetUp extends Component {
    static navigationOptions = {
        title: '用户管理',
    }

    // 点击事件的方法
    _onPressButton() {
        Alert.alert('功能开发中，敬请期待...')
    }

    _toPageSetUp() {
        this.state.navigator('SetUp');
    }

    render() {
        return (
            <View style={{padding: 10, backgroundColor: '#fff'}}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>个人资料</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>修改密码</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton.bind(this)}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>找回密码</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listTxt: {
        fontSize: 16,
        color: '#111'
    },
    sign: {
        fontSize: 18,
        color: '#ccc',
        paddingRight: 2
    },
    uList: {
        height:50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderBottomColor: '#eee'
    }
});