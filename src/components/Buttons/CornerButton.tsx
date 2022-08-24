import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import useTheme from '../../hooks/useTheme';
import {globalStyleSheet} from '../../style/style';

interface TTProps {
  text: string;
  style?: object;
  textAlign?: 'center' | 'left';
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  onPress?: Function;
  buttonWidth?: string;
  buttonHeight?: string;
  clickable?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  btnTextStyle?: object;
}
const CornerButton = (props: TTProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styleSheet.mainConstainer,
        props.style ? props.style : {},
        props.buttonHeight ? {height: HP(`${props.buttonHeight}%`)} : {},
      ]}
      activeOpacity={0.7}
      onPress={() => {
        props.clickable ? (props.onPress ? props.onPress() : null) : null;
      }}>
      <View
        style={[
          styleSheet.BtnContainer,
          props.backgroundColor ? {backgroundColor: props.backgroundColor} : {},
          props.buttonWidth ? {width: WP(`${props.buttonWidth}%`)} : {},
          props.buttonHeight ? {height: HP(`${props.buttonHeight}%`)} : {},
          props.borderColor
            ? {
                borderWidth: 0.5,
                borderColor: props.borderColor,
              }
            : {},
        ]}>
        <Text
          style={[
            {...styleSheet.BtnText},
            props.textColor
              ? {color: props.textColor}
              : {color: colors.primaryText},
            props.btnTextStyle ? {...props.btnTextStyle} : {},
          ]}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styleSheet = StyleSheet.create({
  mainConstainer: {
    width: WP('100%'),
    height: HP('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BtnContainer: {
    width: WP('90%'),
    height: HP('7%'),
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  BtnText: {
    ...globalStyleSheet.titleBold14,
    textAlign: 'center',
  },
});
export default CornerButton;
