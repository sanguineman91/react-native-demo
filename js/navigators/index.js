
/**
 * 路由配置
 */

import React from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import  TabBarItem from './tabBarItem';

import Main from '../containers/main';
import Wallet from '../containers/wallet';
import Profile from '../containers/profile';

import Other from '../containers/other';

//底部的tabBar导航
const TabBar = TabNavigator({
  Main: { 
    screen: Main,
    navigationOptions:({navigation}) => ({  
      tabBarLabel:'首页',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
          tintColor={tintColor}  
          focused={focused}  
          normalImage={require('../../resource/image/icon_home.png')}  
          selectedImage={require('../../resource/image/icon_home_selected.png')}  
        />
      )  
    }),  
  },
  Wallet: { 
    screen: Wallet,
    navigationOptions:({navigation}) => ({  
      tabBarLabel:'收银台',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
          tintColor={tintColor}  
          focused={focused}  
          normalImage={require('../../resource/image/icon_center.png')}  
          selectedImage={require('../../resource/image/icon_center_selected.png')}  
        />
      )  
    }),
  },
  Profile: { 
    screen: Profile,
    navigationOptions:({navigation}) => ({  
      tabBarLabel:'个人',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
          tintColor={tintColor}  
          focused={focused}  
          normalImage={require('../../resource/image/icon_profile.png')}  
          selectedImage={require('../../resource/image/icon_profile_selected.png')}  
        />
      )  
    }),
  },
}, {
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
});

//整个应用的路由栈
const AppNavigator = StackNavigator({
  TabBar: {
      screen: TabBar
  },
  Other:{
    screen: Other
  }
});


const Route = () => (
  <AppNavigator />
);

export default Route;
