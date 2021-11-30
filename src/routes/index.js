import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {svgs} from '../assets';
import TabBarApp from './TabBarApp';
import navigationService from '../services/navigation-service/';
import {APP_SCREEN_TYPES} from './screenTypes';
import SettingScreen from '../views/SettingScreen';
import Home from '../views/Home';
import QRcode from '../views/QRcode';
import Inbox from '../views/Inbox';
import Address from '../views/Address';
import checkOTP from '../views/OTP/CheckOTP/checkOTP';
import sendOTP from '../views/OTP/SentOTP/sendOTP';
import Delivery from '../views/Delivery';
import TakeAway from '../views/TakeAway';
import OrderCoffee from '../views/OrderCoffe';
import News from '../views/News';
import ChooseMenu from '../views/ChooseMenu';
import Cart from '../views/Cart';
import EndOrder from '../views/EndOrder';
import LocationShop from '../views/LocationShop';
import HistoryOrder from '../views/HistoryOrder';
import Receipt from '../views/Receipt';
import Rechange from '../views/Recharge';
import DetailHistory from '../views/DetailHistory';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const config = {
  animation: 'timing',
  config: {
    duration: 300,
    stiffness: 1000,
    damping: 300,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const options = {
  headerShown: false,
  header: false,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: config,
    close: config,
  },
};

function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBarApp {...props} />}
      initialRouteName={APP_SCREEN_TYPES.HOME}>
      <Tab.Screen
        name={APP_SCREEN_TYPES.HOME_TAB}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: svgs.IconHome,
          tabBarIconfocus: svgs.IconHomeForcus,
          title: 'Trang chủ',
        }}
      />

      <Tab.Screen
        name={APP_SCREEN_TYPES.ADDRESS_TAB}
        component={AddressStack}
        options={{
          headerShown: false,
          tabBarIcon: svgs.IconMaker,
          tabBarIconfocus: svgs.IconMakerForcus,
          title: 'Địa chỉ',
        }}
      />
      <Tab.Screen
        name={APP_SCREEN_TYPES.QRCODE_TAB}
        component={QRcodeStack}
        options={{
          headerShown: false,
          tabBarIcon: svgs.IconQRCode,
          tabBarIconfocus: svgs.IconQRCodeForcus,
          title: 'Quét mã',
        }}
      />
      <Tab.Screen
        name={APP_SCREEN_TYPES.INBOX_TAB}
        component={InboxStack}
        options={{
          headerShown: false,
          tabBarIcon: svgs.IconInbox,
          tabBarIconfocus: svgs.IconInboxForcus,
          title: 'Inbox',
        }}
      />
      <Tab.Screen
        name={APP_SCREEN_TYPES.SETTING_TAB}
        component={SettingStack}
        options={{
          headerShown: false,
          tabBarIcon: svgs.IconUser,
          tabBarIconfocus: svgs.IconUserForcus,
          title: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={APP_SCREEN_TYPES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AddressStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={APP_SCREEN_TYPES.ADDRESS}
        component={Address}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function QRcodeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={APP_SCREEN_TYPES.QRCODE}
        component={QRcode}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function InboxStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={APP_SCREEN_TYPES.INBOX}
        component={Inbox}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={APP_SCREEN_TYPES.SETTINGSCREEN}
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const AppRouter = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'sendOTP'} options={options} component={sendOTP} />
        <Stack.Screen
          name={'checkOTP'}
          options={options}
          component={checkOTP}
        />
        <Stack.Screen
          name={APP_SCREEN_TYPES.HOME}
          options={options}
          component={BottomTab}
        />
        <Stack.Screen
          name={'Delivery'}
          options={options}
          component={Delivery}
        />
        <Stack.Screen
          name={'TakeAway'}
          options={options}
          component={TakeAway}
        />
        <Stack.Screen name={'News'} options={options} component={News} />
        <Stack.Screen name={'OrderCoffee'} options={options} component={OrderCoffee} />
        <Stack.Screen name={'ChooseMenu'} options={options} component={ChooseMenu} />
        <Stack.Screen name={'Cart'} options={options} component={Cart} />
        <Stack.Screen name={'EndOrder'} options={options} component={EndOrder} />
        <Stack.Screen name={'LocationShop'} options={options} component={LocationShop} />
        <Stack.Screen name={'HistoryOrder'} options={options} component={HistoryOrder} />
        <Stack.Screen name={'Receipt'} options={options} component={Receipt} />
        <Stack.Screen name={'Rechange'} options={options} component={Rechange} />
        <Stack.Screen name={'DetailHistory'} options={options} component={DetailHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;