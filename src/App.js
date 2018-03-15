import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNav from 'module/common/TabNav';
import Login from 'module/user/Login';
import Register from 'module/user/Register';
import SetUp from 'module/user/SetUp';

const Components = {
  Login: { screen: Login, path: 'app/login' },
  Register: { screen: Register, path: 'app/register' },
  SetUp: { screen: SetUp, path: 'app/setup'},
}

const App = StackNavigator({
  Home: { screen: TabNav, path: 'app/home' },
  Notice: { screen: TabNav, path: 'app/notice' },
  Me: { screen: TabNav, path: 'app/me' },
  ...Components
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { height: 45, opacity: 0.8, borderBottomWidth: 1, borderBottomColor: '#e2e2e2', elevation: 0 },
      headerTitleStyle: { fontSize: 16, color: '#333', alignItems: 'center' },
      cardStack: { gesturesEnabled: true }
    },
    mode: 'card',
    headerMode: 'screen'
  }
);

export default App;
