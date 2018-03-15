import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet} from 'react-native';

export default class SetUp extends Component {
    static navigationOptions = {
        title: '用户管理',
    }

    _pagePasswordChange() {
        this.props.navigation.navigate('PasswordMod')
    }
    _pagePasswordFind() {
        this.props.navigation.navigate('PasswordFind')
    }
    _pageMeData() {
        this.props.navigation.navigate('MeData')
    }


    render() {
        return (
            <View style={{padding: 10, backgroundColor: '#fff'}}>
                <TouchableOpacity onPress={this._pageMeData.bind(this)}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>个人资料</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pagePasswordChange.bind(this)}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>修改密码</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pagePasswordFind.bind(this)}>
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