import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {ImageUri} from '../../config';
import useTheme from '../../hooks/useTheme';
import {globalStyleSheet} from '../../style/style';

interface BackProps {
  onPress: Function;
}

export const BackButton = (props: BackProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        props.onPress();
      }}
      style={{
        ...styleSheet.container,
        backgroundColor: colors.primaryBackground,
      }}>
      <Image
        style={{...styleSheet.icon, tintColor: colors.tertiaryOne}}
        source={ImageUri.backIcon}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    height: HP('5%'),
    width: WP('10%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: HP('3%'),
    left: WP('5%'),
    borderRadius: 8,
  },
  icon:{

      height: HP('5%'),
      width: WP('12%'),
  




  },
});
