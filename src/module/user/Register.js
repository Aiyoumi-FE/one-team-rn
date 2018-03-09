import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
import RadioModal from 'react-native-radio-master';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initId: '',
        };
    }

    static navigationOptions = {
        title: '注册',
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.top }>
                    <Image source={require('@images/graphic.png')} style={ styles.topimg } />
                </View>
                <TextInput
                    style={ styles.textInput }
                    placeholder="邮箱"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.text}
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="用户昵称"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.text}
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="6-12位字母数字密码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(pwd) => this.setState({pwd})}
                    value={this.state.text}
                    secureTextEntry={true}
                />
                <TextInput
                    style={ styles.textInput }
                    placeholder="确认密码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(repwd) => this.setState({repwd})}
                    value={this.state.text}
                    secureTextEntry={true}
                />
                <RadioModal
                    selectedValue={this.state.initId}
                    onValueChange={(id,item) => this.setState({initId: id,initItem:item})}
                    style={{ flexDirection:'row',
                      alignItems:'flex-start',
                      backgroundColor:'#ffffff',
                      marginBottom: 15,
                    }}
                >
                  <Text value="0">加入团队</Text>
                  <Text value="1">创建团队</Text>
                </RadioModal>
                <TextInput
                    style={ styles.textInput }
                    placeholder="团队邀请码"
                    placeholderTextColor="#c8c8c8"
                    underlineColorAndroid="transparent"
                    onChangeText={(repwd) => this.setState({repwd})}
                    value={this.state.text}
                />
                <TouchableOpacity onPress={()=>{alert('点击登录')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>登录</Text>
                    </View>
                </TouchableOpacity>
                <Text style={ styles.bottomText }>已经注册过了？<Text style={{ color: '#0b9dff' }} onPress={() => this.props.navigation.navigate('Login')}>直接登录</Text></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,
        justifyContent:'center',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        
    },
    top: {
        paddingBottom: 40,
        paddingTop: 40,
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
