import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNav from '@module/common/TabNav';
import Login from '@module/user/Login';
import Register from '@module/user/Register';

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
        backgroundColor: '#33cde5',
        opacity: 0.8,
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
