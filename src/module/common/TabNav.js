import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '@module/home/Home';
import Notice from '@module/notice/Notice';
import Me from '@module/user/Me';

const TabNav = TabNavigator({
    Home: {
        screen: Home,
        path: 'app/home',
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (<Image source={require('@images/home.png')} style={[{ tintColor: tintColor }, styles.tabIcon]} />),
        }
    },
    Notice: {
        screen: Notice,
        path: 'app/notice',
        navigationOptions: {
            tabBarLabel: '通知',
            tabBarIcon: ({ tintColor }) => (<Image source={require('@images/notice.png')} style={[{ tintColor: tintColor }, styles.tabIcon]} />),
        }
    },
    Me: {
        screen: Me,
        path: 'app/me',
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (<Image source={require('@images/me.png')} style={[{ tintColor: tintColor }, styles.tabIcon]} />),
        }
    }
}, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: false,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#ff8500',
            inactiveTintColor: '#999',
            showIcon: true,
            indicatorStyle: {
                height: 0
            },
            style: {
                backgroundColor: '#fff',
            },
            labelStyle: {
                fontSize: 12,
            },
        },
    }
);

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    }
})

export default TabNav;