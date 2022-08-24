import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {Navigation} from '../../navigation';
import SystemNavigationBar from 'react-native-system-navigation-bar';

export const Splash = (props: any) => {
  const {colors} = useTheme();

  const updatingTheme = async () => {
    SystemNavigationBar.setNavigationColor(colors.primaryBackground);
  };

  useEffect(() => {
    updatingTheme();
    setTimeout(() => {
      Navigation.goToStartUp(props.navigation);
    }, 2000);
  }, []);

  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <View style={{...styleSheet.container}}>
        <Image
          source={ImageUri.logo}
          style={{...styleSheet.logoIcon}}
          resizeMode={'contain'}
        />
        <Image
          resizeMode="contain"
          source={ImageUri.solMate}
          style={{...styleSheet.solMateIcon}}
        />
      </View>
    </View>
  );
};
