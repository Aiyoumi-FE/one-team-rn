import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNav from '@module/common/TabNav';
import Login from '@module/user/Login';
import Register from '@module/user/Register';
import Notice from '@module/notice/Notice';
import Me from '@module/user/Me';

const Components = {
  Login: { screen: Login, path: 'app/login' },
  Register: { screen: Register, path: 'app/register' },
}

const App = StackNavigator({
  Home: { screen: TabNav, path: 'app/home' },
  Notice: { screen: TabNav, path: 'app/notice' },
  Me: { screen: TabNav, path: 'app/me' },
  ...Components
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { 
        backgroundColor: 'blue',
        height: 40,
      },
      cardStack: {
        gesturesEnabled: true
      }
    },
    mode: 'card',
    headerMode: 'screen'
  }
);

export default App;
