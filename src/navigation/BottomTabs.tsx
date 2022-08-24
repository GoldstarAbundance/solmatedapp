import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_OPTION, ROOT} from './Root';
import {Home, Profile, Sample, Vibes} from '../screens';
import useTheme from '../hooks/useTheme';

import {CustomFont, ImageUri} from '../config';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {View, Image} from 'react-native';
import {globalStyleSheet} from '../style/style';

const TabsBottom = createBottomTabNavigator();

const BottomTabs = () => {
  const {colors} = useTheme();
  return (
    <TabsBottom.Navigator
      initialRouteName={BOTTOM_TAB_OPTION.Home}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {height: HP('7%'), paddingTop: HP('0.5%')},
        tabBarLabelStyle: {
          borderTopWidth: 0,
          // fontSize: CustomFont.FONT_SIZE.b_11,
          // fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
          ...globalStyleSheet.titleRegular11,

          paddingBottom: HP('0.5%'),
        },
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inActiveTab,
        tabBarStyle: {
          height: HP('8%'),
          backgroundColor: colors.secondaryBackGround,
          borderTopWidth: 0,
        },
      }}>
      <TabsBottom.Screen
        component={Home}
        name={BOTTOM_TAB_OPTION.Home}
        key={BOTTOM_TAB_OPTION.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={ImageUri.home}
              resizeMode="contain"
              style={{
                width: WP('5%'),
                height: HP('3%'),
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <TabsBottom.Screen
        component={Vibes}
        name={BOTTOM_TAB_OPTION.Vibes}
        key={BOTTOM_TAB_OPTION.Vibes}
        options={{
          tabBarLabel: 'Vibes',
          tabBarIcon: ({color}) => (
            <Image
              source={ImageUri.vibes}
              resizeMode="contain"
              style={{
                width: WP('5%'),
                height: HP('3%'),
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <TabsBottom.Screen
        component={Profile}
        name={BOTTOM_TAB_OPTION.Profile}
        key={BOTTOM_TAB_OPTION.Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={ImageUri.profile}
              resizeMode="contain"
              style={{
                width: WP('5%'),
                height: HP('3%'),
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </TabsBottom.Navigator>
  );
};
export default BottomTabs;
