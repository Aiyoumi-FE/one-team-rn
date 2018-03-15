import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, Dimensions, Alert, TouchableOpacity } from 'react-native';
const { width, height} = Dimensions.get('window')

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(width)
    }

    static navigationOptions = {
        title: '我的',
    }
    // 点击事件的方法

    _onPressButton = () => {
        Alert.alert('功能开发中，敬请期待...')
    }
    //  渲染页面
    _renderHeader = () => {
        return(
            <View style={styles.uheader}>
                <View>
                    <Image source={{uri: 'http://img.taopic.com/uploads/allimg/140320/235013-14032020515270.jpg'}} style={{width: 50, height: 50,borderRadius: 50,}} />
                </View>
                <Text style={styles.name}>you name</Text>
                <Text style={styles.email}>you eMail@163.com</Text>
            </View>
        )
    }

    _renderList() {
        return(
            <View style={{padding: 10}}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>我的周报</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>我的关注</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>设置</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.uList}>
                        <Text style={styles.listTxt}>其他功能</Text>
                        <Text style={styles.sign}>></Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.ucenter}>
                {this._renderHeader()}
                {this._renderList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ucenter: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff'
    },
    uheader: {
        width: width,
        height: 150,
        borderBottomWidth: 10,
        borderBottomColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
      fontSize: 20,
      color: '#ccc'
    },
    email: {
      fontSize: 16,
      color: '#ddd'
    },
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