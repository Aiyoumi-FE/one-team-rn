import { StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './module/home/Home';
import Notice from './module/notice/Notice';
import Register from './module/user/Register';

const App = TabNavigator({
  Home: { screen: Home },
  Notice: { screen: Notice },
  Register: { screen: Register },
}, {
  tabBarOptions: {
    activeTintColor: '#4BC1D2',
    inactiveTintColor: '#000',
    showIcon: true,
    showLabel: true,
    upperCaseLabel: false,
    pressColor: '#823453',
    pressOpacity: 0.8,
    style: {
      backgroundColor: '#fff',
      paddingBottom: 0,
      borderTopWidth: 0.5,
      borderTopColor: '#ccc',
    },
    labelStyle: {
      fontSize: 12,
      margin: 1
    },
    indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  backBehavior: 'none',
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
