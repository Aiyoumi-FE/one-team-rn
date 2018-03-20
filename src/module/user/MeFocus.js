import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet, FlatList} from 'react-native';
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
        };
        //关注列表数据
        this.gridData = [{
            name: '周报',
            image: require('images/graphic.png'),
            email: 'aaa@aiyoumi.com',
        }, {
            name: '团队',
            image: require('images/notice.png'),
            email: 'bbb@aiyoumi.com',
        }, {
            name: '周报',
            image: require('images/me.png'),
            email: 'ccc@aiyoumi.com',
        }, {
            name: '周报',
            image: require('images/home.png'),
            email: 'ddd@aiyoumi.com',
        }, {
            name: '团队',
            image: require('images/notice.png'),
            email: 'eee@aiyoumi.com',
        }, {
            name: '周报',
            image: require('images/graphic.png'),
            email: 'fff@aiyoumi.com',
        }];
    }
    static navigationOptions = {
        title: '我的关注',
        headerRight: (
            <View><Text>添加</Text></View>
        )
    }
    _add() {
        
    }
    
    showCell(index, item) {
        return (
            <View style={styles.gridCell}>
                <View style={styles.gridCellLeft}>
                    <Image style={styles.gridIcon} source={item.image} />
                    <View>
                        <Text>{item.name}</Text>
                        <Text style={{color: '#ccc'}}>{item.email}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { Alert.alert('功能开发中，敬请期待...') }}>
                    <View style={styles.gridBtn}>
                        <Text>取消关注</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }

    render() {
        const store = this.props.store
        return (
            <View>
                
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
                    />
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    mainContent: {
        padding: 10,
        backgroundColor: '#fff',
    },
    gridCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingTop: 10,
        paddingBottom: 10,
    },
    gridCellLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gridIcon: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    },
    gridBtn: {
        borderWidth: 1,
        borderColor: '#eee',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
    },
});