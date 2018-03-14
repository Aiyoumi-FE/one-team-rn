import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.gridData = [{
            name: '周报',
            image: require('@images/home.png'),
        }, {
            name: '团队',
            image: require('@images/notice.png'),
        }, {
            name: '周报',
            image: require('@images/me.png'),
        }, {
            name: '周报',
            image: require('@images/home.png'),
        }, {
            name: '团队',
            image: require('@images/notice.png'),
        }, {
            name: '周报',
            image: require('@images/me.png'),
        }];
    }

    static navigationOptions = {
        title: '首页',
        headerLeft: null,
    }

    onLogin = () => {
        this.props.navigation.navigate('Login');
    }

    showCell(index, item) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => { Alert.alert('功能开发中，敬请期待...') }}>
                <View style={styles.gridCell}>
                    <Image style={styles.gridIcon} source={item.image} />
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <View style={styles.banner}>
                    <Text style={styles.teamName}>oneTeam</Text>
                    <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={styles.loginBtn}>
                            <Text style={{ color: '#fff' }}>登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContent}>
                    <FlatList
                        //加载数据源
                        data={this.gridData}
                        //展示数据
                        renderItem={({ index, item }) => this.showCell(index, item)}
                        //默认情况下每行都需要提供一个不重复的key属性
                        keyExtractor={(item, index) => (index)}
                        //设置垂直布局（）
                        horizontal={false}
                        //设置水平的排列的个数（只有垂直布局才起作用）
                        numColumns={3}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        paddingTop: 60,
        height: 180,
        alignItems: 'center',
    },
    teamName: {
        marginBottom: 10,
        fontSize: 30,
    },
    loginBtn: {
        width: 90,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09f',
        borderRadius: 30
    },
    mainContent: {
    },
    gridCell: {
        marginTop: 0.3,
        paddingHorizontal: 48,
        paddingVertical: 35,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderStyle: 'solid',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    gridIcon: {
        marginBottom: 8,
        width: 40,
        height: 40,
    }
});
