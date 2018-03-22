import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Alert, StyleSheet, FlatList, navigator, BackAndroid} from 'react-native';
import Toast from "react-native-root-toast";

// 引入mobx 数据
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class MeData extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            navigator: props.navigation.navigate,
        };
    }
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
            title: '添加关注',
        };
    }
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }
    handleBack() {
        console.log(1111)
        alert(111)
        /*var navigator = this.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }else{
            return false;
        }*/
    }
    showCell(index, item) {
        return (
            <TouchableOpacity onPress={this.toUser.bind(this)}>
                <View style={styles.gridCell}>
                    <View style={styles.gridCellLeft}>
                        <Image style={styles.gridIcon} source={item.image} />
                        <View>
                            <Text>{item.name}</Text>
                            <Text style={{color: '#ccc'}}>{item.email}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.cancelFocus.bind(this)}>
                        <Text style={styles.gridBtn}>+ 关注</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            
        )
    }

    onChanegeTextKeyword() {
        alert('促发搜索事件')
    }
    cancelFocus() {
        alert('取消关注事件')
    }
    toUser() {
        // alert('进入关注人界面')
    }
    render() {
        const store = this.props.store
        var data = [];
        for (var i = 0; i < 50; i++) {
            data.push({
                key: i,
                name: '名称' + i,
                image: require('images/home.png'),
                email: 'eee@aiyoumi.com',
            });
        }
        return (
            <View style={styles.mainCont}>
                <View style={styles.searchCont}>
                    <TextInput
                        style={styles.searchInput}
                        underlineColorAndroid="transparent"
                        maxLength={20} 
                        placeholder="搜索用户名"
                        placeholderTextColor="#ccc"
                        onChangeText={this.onChanegeTextKeyword.bind(this)}
                    />
                    <Image style={styles.searchIcon} source={require('images/me.png')} />
                </View>
                <View style={styles.gridCont}>
                    <FlatList
                        //加载数据源
                        data={data}
                        //展示数据
                        renderItem={({ index, item }) => this.showCell(index, item)}
                        //默认情况下每行都需要提供一个不重复的key属性
                        // keyExtractor={(item, index) => (index)}
                        //设置垂直布局（）
                        horizontal={false}
                        ItemSeparatorComponent={() => { return <View style={{height:1,backgroundColor:'#eee',}} />; }}
                    />
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    mainCont: {
        padding: 10,
        backgroundColor: '#fff',
        flex:1, 
    },
    searchCont: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 20,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchInput: {
        height:40,
        flex:1, 
    },
    searchIcon: {
        width: 20,    
        height: 20,    
        resizeMode: 'stretch'  
    },
    gridCont: {
        flex:1,
    },
    gridCell: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
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
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: '#09f',
        color: '#fff',
    },
});