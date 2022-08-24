import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
export const Sample = (props: any) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <Text
        style={{...globalStyleSheet.titleBold12, color: colors.primaryText}}>
        Hello
      </Text>
      <Text
        style={{...globalStyleSheet.titleBold12, color: colors.primaryText}}>
        Text Font Change
      </Text>
    </View>
  );
};
