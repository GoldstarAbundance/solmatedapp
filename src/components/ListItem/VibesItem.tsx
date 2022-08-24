import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {Message} from '../../interface';
import {globalStyleSheet} from '../../style/style';
interface VibesProp {
  uri: string;
}

export const VibesItem = (props: VibesProp) => {
  const {colors} = useTheme();

  return <View></View>;
};
const styleSheet = StyleSheet.create({
  container: {
    alignItems: 'baseline',
    flexDirection: 'row',
    width: WP('100%'),
    padding: 8,
  },
  msgContainer: {
    maxWidth: WP('90%'),
    marginStart: WP('5%'),
    marginEnd: '5%',
    padding: 12,
    borderRadius: 10,
  },
  textMsg: {
    maxWidth: WP('90%'),
  },
});
