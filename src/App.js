import React  from 'react';
import { StackNavigator } from 'react-navigation';
import TabNav from 'module/common/TabNav';
import Login from 'module/user/Login';
import Register from 'module/user/Register';
import SetUp from 'module/user/SetUp';  /* ---- 用户管理 ---- */
import PasswordMod from 'module/user/PasswordMod';  /* ---- 修改密码 ---- */
import PasswordFind from 'module/user/PasswordFind';  /* ---- 找回密码 ---- */
import MeData from 'module/user/MeData';  /* ---- 个人资料修改 ---- */
import MeFocus from 'module/user/MeFocus';  /* ---- 我的关注 ---- */
import AddMeFocus from 'module/user/AddMeFocus';  /* ---- 添加关注 ---- */


// 全局注册并注入mobx，这里注明哪些地方用到store
import {Provider} from 'mobx-react'
// 获取store实例
import store from 'src/mobx/store'

const Components = {
  Login: { screen: Login, path: 'app/login' },
  Register: { screen: Register, path: 'app/register' },
  SetUp: { screen: SetUp, path: 'app/setup'},
  PasswordMod: { screen: PasswordMod },
  PasswordFind: { screen: PasswordFind },
  MeData: { screen: MeData },
  MeFocus: { screen: MeFocus },
  AddMeFocus: { screen: AddMeFocus },
}

const Navigation = StackNavigator({
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
// =====================全局引用mobx


const  App = () => {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>

    );
}

export default App;
